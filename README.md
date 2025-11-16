**Project: Student Dashboard (Hackathon)**

**Overview**: This static project (HTML/CSS/JS) provides a small student dashboard that tracks monthly attendance for five main subjects using QR scans, stores data in `localStorage`, and offers CSV export and month-reset functionality.

**Storage (localStorage keys)**
- `attendanceByMonth`: Object keyed by `YYYY-MM` (e.g. `2025-11`). Value is an object of subjects, e.g:

```
{
  "2025-11": {
    "Physics": { "present": 8, "sessions": 10, "dates": ["2025-11-03","2025-11-04"] },
    "Mathematics": { "present": 10, "sessions": 10, "dates": ["2025-11-02","2025-11-04"] },
    "FPL": { "present": 9, "sessions": 10, "dates": [] },
    "Mechanics": { "present": 7, "sessions": 10, "dates": [] },
    "BEE": { "present": 6, "sessions": 10, "dates": [] }
  }
}
```

- `attendanceRate`: Derived overall monthly percentage (number 0-100) for the current month — stored as a convenience for UI rendering.

**Percentage Calculation (Logic)**
- For the currently selected month (key `YYYY-MM`), the code sums all `present` values across the five subjects and sums all `sessions` values across them.
- The overall monthly attendance percentage is computed as:

```
percentage = (totalPresent / totalSessions) * 100
```

- Edge cases handled:
  - If `totalSessions` is 0 (no sessions logged), the percentage is treated as `0%` (avoids division by zero).
  - Duplicate marks on the same calendar date are prevented (the same subject cannot be marked present twice on the same day).

**Per-subject Percentage**
- In addition to the overall monthly percentage, the dashboard now shows a percentage for each subject (Physics, Mathematics, FPL, Mechanics, BEE).
- For each subject the percentage is computed as:

```
subjectPercent = (present / sessions) * 100
```

- If a subject has `sessions === 0`, the subject percentage displays as `0%` to avoid division by zero.
- The UI elements for each subject are updated after any scan or marking action; progress bars for each subject reflect the computed percentage.

**How QR scanning affects these numbers**
- The QR payload is parsed to detect a subject name (one of: `Physics`, `Mathematics`, `FPL`, `Mechanics`, `BEE`) or a special `ALL` token.
- On a valid subject scan, the script will:
  - Increment `sessions` and `present` for that subject for the current month, and record the date into the subject's `dates` array (if not already recorded for today).
  - Recompute `attendanceRate` and update the dashboard UI.
- On `ALL` scan, the script marks all five subjects simultaneously for the current month (useful for marking an entire day's attendance quickly).

Note: Current policy increments both `sessions` and `present` on scan (the app treats a scan as presence for a session). If you'd rather model teacher-declared sessions separately (incrementing `sessions` without `present`), the code can be changed in `dashboard/script.js`.

**CSV Export Format**
- The settings page allows exporting the current month's attendance as CSV with columns: `Subject,Present,Sessions,Dates`
- Dates are serialized as a JSON-like string or comma-separated list depending on implementation; you can open the CSV in a text editor or spreadsheet app.

**Resetting Month**
- The settings UI exposes a "Reset This Month" action which deletes the `YYYY-MM` bucket from `attendanceByMonth` and sets `attendanceRate` to 0 for the UI. Use with caution — this permanently removes that month's stored data from `localStorage`.

**Files to Inspect / Customize**
- `dashboard/script.js` — core logic: QR handlers, `detectSubjectFromText`, `markAttendanceForSubject`, `markAttendanceForSubjects`, month-keying and percentage computation.
- `setting/index.html` — settings UI: CSV export and reset actions are wired here.
- `dashboard/index.html` — dashboard UI elements that display `attendanceRate` and per-subject info.

**Testing / Manual Verification**
1. Open the app in a browser (open `dashboard/index.html`).
2. On a device with a camera, open the QR modal and scan a QR that encodes a subject name (e.g., `Physics`) or `ALL`.
3. Verify the dashboard updates the subject's `present` and `sessions`, and that the overall percentage updates.
4. In Settings, click "Download Attendance (CSV)" to confirm the exported CSV contains the current month's data.
5. Use "Reset This Month" to confirm the month bucket is deleted and UI shows 0%.

**How to change the attendance policy**
- If you prefer scans to only mark presence (not increment sessions), or to have separate session creation flows, edit `markAttendanceForSubject` inside `dashboard/script.js`:
  - To avoid incrementing `sessions`, remove the `sessions++` line.
  - To track sessions separately, add an admin/teacher button that increments sessions for all/selected subjects without modifying `present`.

**Why month-aware storage?**
- Storing attendance in month buckets (`YYYY-MM`) keeps each month's attendance isolated (simple to export/reset). It makes computing monthly rate straightforward and avoids mixing data across months.

If you want, I can also:
- Add a month selector in Settings to export or view previous months.
- Add a desktop-friendly "simulate scan" button for testing without a camera.

---
Created: November 16, 2025
