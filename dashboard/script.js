// --- TIMETABLE DATA MODEL (Multiple Divisions) ---
const timetableData = {
    A: {
        1: { day: "Monday", schedule: [
            { time: "9:00 - 10:00", subject: "M-I" },
            { time: "10:00 - 11:00", subject: "BEE" },
            { time: "11:00 - 11:15", subject: "LUNCH", isBreak: true },
            { time: "11:15 - 1:15", subject: "A1-M-I / A2-BEE / A3-PHY" },
            { time: "01:15 - 02:00", subject: "LUNCH", isBreak: true },
            { time: "02:00 - 04:00", subject: "A1-M-I / A2-FPL / A3-PCS" },
        ]},
        2: { day: "Tuesday", schedule:[
            { time: "9:00 - 10:00", subject: "FPL" },
            { time: "10:00 - 11:00", subject: "EM" },
            { time: "11:00 - 11:15", subject: "LUNCH", isBreak: true },
            { time: "11:15 - 12:15", subject: "PHY" },
            { time: "12:15 - 01:15", subject: "M-I" },
            { time: "01:15 - 02:00", subject: "Long Break", isBreak: true },
            { time: "02:00 - 03:00", subject: "DTIL" },
            { time: "03:00 - 04:00", subject: "BEE" },
        ]},
        3: { day: "Wednesday", schedule:[
            { time: "09:00 - 10:00", subject: "EM" },
            { time: "10:00 - 11:00", subject: "PHY" },
            { time: "11:00 - 11:15", subject: "LUNCH", isBreak: true },
            { time: "11:15 - 01:15", subject: "A1-PCS / A2-M-I / A3-FPL" },
            { time: "01:15 - 02:00", subject: "Long Break", isBreak: true },
            { time: "02:00 - 03:00", subject: "M-I" },
            { time: "03:00 - 04:00", subject: "EM" },
        ]},
        4: { day: "Thursday", schedule:[
            { time: "09:00 - 11:00", subject: "A1-BEE / A2-PHY / A3-EM" },
            { time: "11:00 - 11:15", subject: "LUNCH", isBreak: true },
            { time: "11:15 - 01:15", subject: "A1-PHY / A2-EM / A3-BEE" },
            { time: "01:15 - 02:00", subject: "Short Break", isBreak: true },
            { time: "02:00 - 03:00", subject: "DTIL" },
            { time: "03:00 - 04:00", subject: "Extra" },
        ]},
        5: { day: "Friday", schedule:[
            { time: "9:00 - 10:00", subject: "BEE" },
            { time: "10:00 - 11:00", subject: "PHY" },
            { time: "11:00 - 11:15", subject: "Short Break", isBreak: true },
            { time: "11:15 - 01:15", subject: "A1-FPL / A2-PCS / A3-M-I" },
            { time: "01:30 - 02:00", subject: "LUNCH", isBreak: true },
            { time: "02:00 - 03:00", subject: "FPL" },
            { time: "03:00 - 04:00", subject: "TG" },
        ]},
        6: { day: "Saturday", schedule:[ { time: "09:00 - 04:00", subject: "CCC-I" } ]},
        0: { day: "Sunday", schedule:[ { time: "All Day", subject: "Weekend Holiday!" } ]}
    },
    B: {
        1: { day: "Monday", schedule:[
            { time: "9:00 - 10:00", subject: "EM" },
            { time: "10:00 - 11:00", subject: "FPL" },
            { time: "11:00 - 11:15", subject: "Morning Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "PHY" },
            { time: "12:15 - 01:15", subject: "M-I" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 04:00", subject: "A1-EM/A2-BEE/A3-PHY" },
        ]},
        2: { day: "Tuesday", schedule:[
            { time: "9:00 - 11:00", subject: "A1-BEE/A2-PHY/A3-EM" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "M-I" },
            { time: "12:15 - 01:15", subject: "PHY" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 04:00", subject: "A1-M-I/A2-PCS/A3-FPL" },
        ]},
        3: { day: "Wednesday", schedule:[
            { time: "9:00 - 11:00", subject: "B1-FPL/B2-Lib/B3-PHY" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "PHY" },
            { time: "12:15 - 01:15", subject: "BEE" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 03:00", subject: "EM" },
            { time: "03:00 - 04:00", subject: "M-I" },
        ]},
        4: { day: "Thursday", schedule:[
            { time: "9:00 - 10:00", subject: "FPL" },
            { time: "10:00 - 11:00", subject: "M-I" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 01:15", subject: "B1-PCS/B2-FPL/B3-M-I" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 4:00", subject:"BEE" },
        ]},
        5: { day: "Friday", schedule:[
            { time: "9:00 - 10:00", subject: "EM" },
            { time: "10:00 - 11:00", subject: "BEE" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 01:15", subject: "B1-PHY/B2-EM/B3-BEE" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 4:00", subject:"DTIL" },
        ]},
        6: { day: "Saturday", schedule:[ { time: "All Day", subject: "CCC-I" } ]},
        0: { day: "Sunday", schedule:[ { time: "All Day", subject: "Weekend Holiday!" } ]}
    },
    C: {
        1: { day: "Monday", schedule:[
            { time: "9:00 - 10:00", subject: "PHY" },
            { time: "10:00 - 11:00", subject: "M-I" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 01:15", subject: "C1-Lib/C2-FPL/C3-PCS" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 03:00", subject: "DTIL" },
            { time: "03:00 - 04:00", subject: "BEE" },
        ]},
        2: { day: "Tuesday", schedule:[
            { time: "9:00 - 11:00", subject: "C1-FPL/C2-PCS/C3-Lib" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "PHY" },
            { time: "12:15 - 01:15", subject: "BEE" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:15 - 04:00", subject: "C1-BEE/C2-PHY/C3-EM" },
        ]},
        3: { day: "Wednesday", schedule:[
            { time: "9:00 - 11:00", subject: "C1-PHY/C2-EM/C3-BEE" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "EM" },
            { time: "12:15 - 01:15", subject: "FPL" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "2:00 - 4:00", subject: "C1-PCS/C2-M-I/C3-FPL" },
        ]},
        4: { day: "Thursday", schedule:[
            { time: "9:00 - 10:00", subject: "M-I" },
            { time: "10:00 - 11:00", subject: "BEE" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 01:15", subject: "C1-EM/C2-BEE/C3-PHY" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 3:00", subject: "FPL" },
            { time: "3:00 - 4:00", subject: "EM" },
        ]},
        5: { day: "Friday", schedule:[
            { time: "9:00 - 10:00", subject: "PHY" },
            { time: "10:00 - 11:00", subject: "EM" },
            { time: "11:00 - 11:15", subject: "Break", isBreak: true },
            { time: "11:15 - 12:15", subject: "M-I" },
            { time: "12:15 - 01:15", subject: "DTIL" },
            { time: "01:15 - 02:00", subject: "Lunch", isBreak: true },
            { time: "02:00 - 3:00", subject: "TG/EXTRA" },
        ]},
        6: { day: "Saturday", schedule:[ { time: "All Day", subject: "CCC-I" } ]},
        0: { day: "Sunday", schedule:[ { time: "All Day", subject: "Weekend Holiday" } ]}
    }
};

// --- DYNAMIC RENDERING FUNCTION ---
function renderDailyTimetable() {
    const divisionSelector = document.getElementById('divisionSelector');
    const selectedDivision = divisionSelector ? divisionSelector.value : 'A';

    const today = new Date();
    const dayOfWeek = today.getDay();
    const dailyData = timetableData[selectedDivision]?.[dayOfWeek];

    const heading = document.getElementById('todayScheduleDay');
    const container = document.getElementById('scheduleContainer');
    if (!heading || !container) { console.error("Timetable HTML elements not found."); return; }

    if (!dailyData) {
        heading.innerText = `Timetable for Division ${selectedDivision}`;
        container.innerHTML = '<div class="slot" style="color:var(--muted)">No schedule data available for this day.</div>';
        return;
    }

    heading.innerText = `${dailyData.day}'s Class Timings (Division ${selectedDivision})`;
    container.innerHTML = '';

    dailyData.schedule.forEach(slot => {
        const breakStyle = slot.isBreak ? 'style="background:var(--glass); color:var(--muted);"' : '';
        const slotHTML = `
            <div class="slot" ${breakStyle}>
                <div class="time">${slot.time}</div>
                <div class="sub">${slot.subject}</div>
            </div>
        `;
        container.innerHTML += slotHTML;
    });
}

// --- MAIN INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    try{
        function syncProfileData(){
      try{
        const name = localStorage.getItem('studentName') || 'Krushna Saruk';
        document.getElementById('dashboardName').textContent = name;
        const pic = localStorage.getItem('profilePic');
        const picElement = document.getElementById('dashboardProfilePic');
        if(pic){
          picElement.innerHTML = `<img src="${pic}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
        } else {
          const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
          picElement.textContent = initials;
        }

        const email = localStorage.getItem('studentEmail') || 'student@school.com';
        document.getElementById('dashboardEmail').textContent = email;
        document.getElementById('dashboardEmailField').textContent = email;
        const phone = localStorage.getItem('studentPhone') || '-';
        document.getElementById('dashboardPhone').textContent = phone;
        const courseMap = {btech: 'B.Tech', diploma: 'Diploma', mtech: 'M.Tech', bca: 'BCA', '': '-'};
        const course = localStorage.getItem('studentCourse') || '';
        document.getElementById('dashboardCourse').textContent = courseMap[course] || '-';
        const isDark = !document.body.classList.contains('light-theme');
        document.getElementById('dashboardTheme').textContent = isDark ? 'Dark' : 'Light';
                // Update top-right avatar button if present so it reflects profile changes
                try{
                    const avatarBtn = document.getElementById('avatarBtn');
                    if(avatarBtn){
                        if(pic){
                            avatarBtn.innerHTML = `<img src="${pic}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
                        } else {
                            const initials = name.split(' ').map(n => n[0]||'').join('').toUpperCase().slice(0,2) || 'KS';
                            avatarBtn.textContent = initials;
                        }
                    }
                }catch(e){}
                }catch(e){}
        // Update attendance metrics from stored per-user value (if any)
        try{
            const attendance = parseFloat(localStorage.getItem('attendanceRate') || '0');
            const pctText = isNaN(attendance) ? '0%' : (Math.round(attendance*10)/10) + '%';
            const main = document.getElementById('attendanceMain');
            if(main) main.textContent = (isNaN(attendance) ? '0% Present' : pctText + ' Present');
            const prog = document.getElementById('attendanceProg');
            if(prog) prog.style.width = (isNaN(attendance) ? '0%' : Math.min(100, attendance) + '%');
            const right = document.getElementById('attendanceRateRight');
            if(right) right.textContent = (isNaN(attendance) ? '0%' : pctText);
            const tard = document.getElementById('tardinessRight');
            if(tard) {
                // simple default: tardiness is complementary small value for demo
                const tardiness = isNaN(attendance) ? 0 : Math.max(0, 100 - attendance).toFixed(1) + '%';
                tard.textContent = tardiness;
            }
        }catch(e){console.error(e)}
    }

    syncProfileData();
    window.addEventListener('pageshow', syncProfileData);
    document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) syncProfileData(); });

    // QR scanner (guarded - some pages don't include the scanner modal)
    const scanButton = document.getElementById('scan-qr-btn');
    const qrModal = document.getElementById('qr-scanner-modal');
    const closeModalButton = document.getElementById('close-scanner-btn');
    let scanner;
    if(scanButton && qrModal && closeModalButton){
        // Helper: mark attendance for a subject for the current month, persist records and update UI
        function markAttendanceForSubject(subject){
            try{
                const monthKey = new Date().toISOString().slice(0,7); // YYYY-MM
                const storageKey = 'attendanceByMonth';
                const rawBy = localStorage.getItem(storageKey) || '{}';
                const by = JSON.parse(rawBy || '{}');
                const records = by[monthKey] || {};
                const today = new Date().toISOString().slice(0,10);
                const subj = subject || 'Unknown';
                if(!records[subj]) records[subj] = { present:0, sessions:0, dates: [] };
                // Prevent duplicate scan for same subject on same day
                if(records[subj].dates && records[subj].dates.includes(today)){
                    alert(subj + ': Attendance already recorded for today.');
                    return false;
                }
                records[subj].dates.push(today);
                records[subj].present = (records[subj].present || 0) + 1;
                records[subj].sessions = (records[subj].sessions || 0) + 1;
                by[monthKey] = records;
                localStorage.setItem(storageKey, JSON.stringify(by));

                // compute overall attendance rate for this month across all subjects
                let totalPresent = 0, totalSessions = 0;
                Object.keys(records).forEach(s=>{
                    const r = records[s];
                    totalPresent += (r.present||0);
                    totalSessions += (r.sessions||0);
                });
                const overall = totalSessions ? (totalPresent/totalSessions*100) : 0;
                localStorage.setItem('attendanceRate', String(Math.round(overall*10)/10));

                // Update visible UI
                try{
                    const pctText = Math.round(overall*10)/10 + '%';
                    const main = document.getElementById('attendanceMain'); if(main) main.textContent = pctText + ' Present';
                    const prog = document.getElementById('attendanceProg'); if(prog) prog.style.width = Math.min(100, Math.round(overall)) + '%';
                    const right = document.getElementById('attendanceRateRight'); if(right) right.textContent = pctText;
                    const tard = document.getElementById('tardinessRight'); if(tard) tard.textContent = Math.max(0, (100 - Math.round(overall))).toFixed(1) + '%';
                }catch(e){console.error(e)}

                // Update per-subject percentages in the UI
                try{ updatePerSubjectUI(); }catch(e){console.error('updatePerSubjectUI error', e)}

                alert('Attendance marked for ' + subj + ' (' + monthKey + ')');
                return true;
            }catch(e){ console.error('markAttendanceForSubject error', e); return false; }
        }

        // Try to map scanned text to a subject name
        function detectSubjectFromText(text){
            if(!text) return null;
            const t = String(text).toLowerCase();
            if(t.includes('all') || t.includes('every') || t.includes('monthly')) return 'ALL';
            if(t.includes('phys') || t.includes('phy')) return 'Physics';
            if(t.includes('math')) return 'Mathematics';
            if(t.includes('fpl') || t.includes('program') || t.includes('fundamental')) return 'FPL';
            if(t.includes('mechan') || t.includes('mech')) return 'Mechanics';
            if(t.includes('bee') || t.includes('elect') || t.includes('basic electrical')) return 'BEE';
            return null;
        }

        function markAttendanceForSubjects(subjects){
            if(!Array.isArray(subjects)) return false;
            try{
                const monthKey = new Date().toISOString().slice(0,7);
                const storageKey = 'attendanceByMonth';
                const rawBy = localStorage.getItem(storageKey) || '{}';
                const by = JSON.parse(rawBy || '{}');
                const records = by[monthKey] || {};
                const today = new Date().toISOString().slice(0,10);
                const marked = [];
                subjects.forEach(subj=>{
                    if(!records[subj]) records[subj] = { present:0, sessions:0, dates: [] };
                    if(!(records[subj].dates||[]).includes(today)){
                        records[subj].dates.push(today);
                        records[subj].present = (records[subj].present||0) + 1;
                        records[subj].sessions = (records[subj].sessions||0) + 1;
                        marked.push(subj);
                    }
                });
                by[monthKey] = records;
                localStorage.setItem(storageKey, JSON.stringify(by));

                // compute overall
                let totalPresent = 0, totalSessions = 0;
                Object.keys(records).forEach(s=>{ const r = records[s]; totalPresent += (r.present||0); totalSessions += (r.sessions||0); });
                const overall = totalSessions ? (totalPresent/totalSessions*100) : 0;
                localStorage.setItem('attendanceRate', String(Math.round(overall*10)/10));

                // update UI once
                try{
                    const pctText = Math.round(overall*10)/10 + '%';
                    const main = document.getElementById('attendanceMain'); if(main) main.textContent = pctText + ' Present';
                    const prog = document.getElementById('attendanceProg'); if(prog) prog.style.width = Math.min(100, Math.round(overall)) + '%';
                    const right = document.getElementById('attendanceRateRight'); if(right) right.textContent = pctText;
                    const tard = document.getElementById('tardinessRight'); if(tard) tard.textContent = Math.max(0, (100 - Math.round(overall))).toFixed(1) + '%';
                }catch(e){console.error(e)}

                // Update per-subject percentages in the UI
                try{ updatePerSubjectUI(); }catch(e){console.error('updatePerSubjectUI error', e)}

                if(marked.length) alert('Attendance marked for: ' + marked.join(', '));
                else alert('No new attendance to mark for today.');
                return marked.length > 0;
            }catch(e){ console.error(e); return false; }
        }

        const onScanSuccess = (decodedText, decodedResult) => {
            console.log(`QR Code Scanned: ${decodedText}`);
            // Determine subject from decoded text
            let subject = detectSubjectFromText(decodedText);
            const tryFinish = (subj)=>{
                if(!subj) return;
                // stop scanner then mark attendance
                scanner.stop().then(() => {
                    qrModal.style.display = 'none';
                    markAttendanceForSubject(subj);
                }).catch(err => {
                    console.error("Error stopping the scanner", err);
                    // even if stopping fails, attempt to mark
                    qrModal.style.display = 'none';
                    markAttendanceForSubject(subj);
                });
            };

            if(subject){
                if(subject === 'ALL'){
                    // mark all main subjects for the month
                    const subjects = ['Physics','Mathematics','FPL','Mechanics','BEE'];
                    scanner.stop().then(()=>{
                        qrModal.style.display = 'none';
                        markAttendanceForSubjects(subjects);
                    }).catch(err=>{
                        console.error('Error stopping scanner for ALL', err);
                        qrModal.style.display = 'none';
                        markAttendanceForSubjects(subjects);
                    });
                    return;
                }
                tryFinish(subject);
                return;
            }

            // If not confidently detected, ask user to pick from list
            const choices = ['Physics','Mathematics','FPL','Mechanics','BEE'];
            let message = 'Scanned content: "' + String(decodedText) + '"\nChoose subject number to mark attendance:\n';
            choices.forEach((c,i)=> message += (i+1) + '. ' + c + '\n');
            const ans = prompt(message + '\nEnter number (1-' + choices.length + ')');
            const num = parseInt(ans);
            if(!isNaN(num) && num>=1 && num<=choices.length){
                tryFinish(choices[num-1]);
            } else {
                // if user cancels or enters invalid input, stop scanner and hide modal
                try{ scanner.stop().then(()=>{ qrModal.style.display = 'none'; alert('Attendance not recorded.'); }).catch(()=>{ qrModal.style.display = 'none'; alert('Attendance not recorded.'); }); }catch(e){ qrModal.style.display = 'none'; }
            }
        };
        const onScanFailure = (error) => {};

        scanButton.addEventListener('click', () => {
            qrModal.style.display = 'flex';
            scanner = new Html5Qrcode("qr-reader");
            scanner.start(
                { facingMode: "environment" },
                { fps: 10, qrbox: { width: 250, height: 250 } },
                onScanSuccess,
                onScanFailure
            ).catch(err => {
                console.error("Unable to start scanning.", err);
                alert("Error: Could not start camera. Please grant permission.");
            });
        });

        closeModalButton.addEventListener('click', () => {
            if (scanner) {
                scanner.stop().then(() => { console.log("Scanner stopped."); }).catch(err => { console.error("Error stopping the scanner", err); });
            }
            qrModal.style.display = 'none';
        });
    }

    function applySavedTheme(){
        try{ const saved = localStorage.getItem('theme'); const shouldBeLight = saved === 'light'; document.body.classList.toggle('light-theme', shouldBeLight); }catch(e){}
    }
    applySavedTheme();
    window.addEventListener('pageshow', applySavedTheme);

    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.innerText = new Date().getFullYear();
    renderDailyTimetable();
    const divisionSelector = document.getElementById('divisionSelector');
    if (divisionSelector) { divisionSelector.addEventListener('change', renderDailyTimetable); }

    // mobile sidebar toggle
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    let mobileOpen = false;
    hamburger?.addEventListener('click', ()=>{
        mobileOpen = !mobileOpen;
        if(window.innerWidth <= 880){
            sidebar.classList.toggle('mobile-open', mobileOpen);
            if(mobileOpen){
                const back = document.createElement('div');
                back.id = 'mobile-backdrop';
                back.style = 'position:fixed;inset:0;background:rgba(0,0,0,0.35);z-index:90';
                back.addEventListener('click', ()=>{ mobileOpen=false; sidebar.classList.remove('mobile-open'); back.remove();});
                document.body.appendChild(back);
            } else { const existing = document.getElementById('mobile-backdrop'); if(existing) existing.remove(); }
        }
    });

    // Close mobile dropdown when window is resized above mobile breakpoint
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 880){
            mobileOpen = false;
            sidebar?.classList.remove('mobile-open');
            const existing = document.getElementById('mobile-backdrop'); if(existing) existing.remove();
        }
    });

    // profile dropdown
    const avatarBtn = document.getElementById('avatarBtn');
    const profileMenu = document.getElementById('profileMenu');
    if(avatarBtn && profileMenu){
        avatarBtn.addEventListener('click', (e)=>{ profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block'; });
        window.addEventListener('click', (e)=>{ if(!avatarBtn.contains(e.target) && !profileMenu.contains(e.target)){ profileMenu.style.display = 'none'; } });
    }

    document.getElementById('logoutBtn')?.addEventListener('click', ()=>{ 
        try{
            // Clear profile fields for a guest view
            localStorage.removeItem('studentName');
            localStorage.removeItem('profilePic');
            localStorage.removeItem('studentEmail');
            localStorage.removeItem('studentPhone');
            localStorage.removeItem('studentCourse');
            localStorage.removeItem('attendanceRate');
        }catch(e){console.error(e)}
        // reload to reflect guest/default values
        window.location.reload();
    });

    const themeBtn = document.getElementById('themeToggle');
    themeBtn?.addEventListener('click', ()=>{
        document.body.classList.toggle('light-theme');
        try{ const isLight = document.body.classList.contains('light-theme'); localStorage.setItem('theme', isLight ? 'light' : 'dark'); }catch(e){}
    });

    // Deterministic routing between known folders: dashboard, extracurricular, setting
    function handleNavItemClick(item){
        if(!item) return;
        console.log('handleNavItemClick:', item.getAttribute('data-section'));
        const section = item.getAttribute('data-section');
        const nextSibling = item.nextElementSibling;
        const isSubmenu = nextSibling && nextSibling.classList.contains('nav-submenu');
        // Normalize path for Windows/Unix compatibility
        const currentPath = window.location.pathname.replace(/\\/g, '/');
        const inExtra = /\/extracurricular\//.test(currentPath);
        const inSetting = /\/setting(s)?\//.test(currentPath);
        // Consider "inDashboard" true only when inside dashboard but NOT inside extracurricular or setting subfolders
        const inDashboard = /\/dashboard\//.test(currentPath) && !inExtra && !inSetting;

        // Map targets based on current location
        if(section === 'extracurricular'){
            if(inExtra){ window.location.href = './index.html'; }
            else if(inDashboard){ window.location.href = 'extracurricular/index.html'; }
            else if(inSetting){ window.location.href = '../dashboard/extracurricular/index.html'; }
            else { window.location.href = '../dashboard/extracurricular/index.html'; }
            return;
        }
        if(section === 'insights'){
            if(inDashboard){ window.location.href = 'index.html'; }
            else if(inExtra){ window.location.href = '../index.html'; }
            else if(inSetting){ window.location.href = '../dashboard/index.html'; }
            else { window.location.href = '../dashboard/index.html'; }
            return;
        }
        if(section === 'settings'){
            if(inSetting){ window.location.href = './index.html'; }
            else if(inDashboard){ window.location.href = '../setting/index.html'; }
            else if(inExtra){ window.location.href = '../../setting/index.html'; }
            else { window.location.href = '../setting/index.html'; }
            return;
        }
        if(section === 'moodle'){ window.open('https://dpesmoodle.com/dpcoe/', '_blank'); return; }
        document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
        item.classList.add('active');
    }

    // Delegate clicks from the sidebar to ensure handlers always fire (robust across pages)
    const sidebarEl = document.getElementById('sidebar');
    if(sidebarEl){
        console.log('Sidebar delegation attached');
        sidebarEl.addEventListener('click', (e)=>{
            // Ignore clicks on the nav-toggle element (submenu toggle has its own handler)
            if(e.target.closest('.nav-toggle')) return;
            const item = e.target.closest('.nav-item');
            if(item) handleNavItemClick(item);
        });
    }

    document.querySelectorAll('.nav-toggle').forEach(toggle=>{
        toggle.addEventListener('click', (e)=>{
            e.stopPropagation();
            const navItem = toggle.closest('.nav-item');
            const submenu = navItem.nextElementSibling;
            if(submenu && submenu.classList.contains('nav-submenu')){
                navItem.classList.toggle('expanded');
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    document.querySelectorAll('.nav-subitem').forEach(subitem=>{
        subitem.addEventListener('click', ()=>{
            document.querySelectorAll('.nav-subitem').forEach(s=>s.classList.remove('active'));
            subitem.classList.add('active');
            const subsection = subitem.getAttribute('data-subsection');
            // Normalize path for Windows/Unix compatibility
            const currentPath = window.location.pathname.replace(/\\/g, '/');
            const inExtra = /\/extracurricular\//.test(currentPath);
            const inSetting = /\/setting(s)?\//.test(currentPath);
            const inDashboard = /\/dashboard\//.test(currentPath) && !inExtra && !inSetting;
            // If we're on an extracurricular page with in-page content area, render it
            if(inExtra){
                try{
                    if(typeof renderSection === 'function'){
                        renderSection(subsection);
                        // update the hash so the state is shareable/bookmarkable
                        if(history && history.replaceState){
                            history.replaceState(null, '', '#' + subsection);
                        } else { window.location.hash = subsection; }
                        return;
                    }
                }catch(e){ console.error(e); }
                // If container not present, fallthrough to navigation
                window.location.href = './index.html#' + subsection;
                return;
            }
            // If not in extracurricular, navigate to the extracurricular index with hash
            if(inExtra){
                window.location.href = './index.html#' + subsection;
            } else if(inDashboard){
                window.location.href = 'extracurricular/index.html#' + subsection;
            } else {
                window.location.href = '../dashboard/extracurricular/index.html#' + subsection;
            }
        });
    });

    // --- SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    
    function performSearch(query) {
        if (!query.trim()) return;
        
        query = query.toLowerCase();
        const navItems = document.querySelectorAll('.nav-item');
        const navSubitems = document.querySelectorAll('.nav-subitem');
        
        let found = false;
        
        // Search in main nav items
        for (let item of navItems) {
            const label = item.querySelector('.nav-label')?.textContent.toLowerCase() || '';
            if (label.includes(query)) {
                // Expand submenu if exists
                const nextSibling = item.nextElementSibling;
                if (nextSibling && nextSibling.classList.contains('nav-submenu')) {
                    item.classList.add('expanded');
                    nextSibling.style.display = 'block';
                }
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
                break;
            }
        }
        
        // If not found in main items, search in subitems
        if (!found) {
            for (let subitem of navSubitems) {
                const text = subitem.textContent.toLowerCase();
                if (text.includes(query)) {
                    // Find and expand parent nav-item
                    const parent = subitem.closest('.nav-submenu').previousElementSibling;
                    if (parent) {
                        parent.classList.add('expanded');
                        subitem.closest('.nav-submenu').style.display = 'block';
                        subitem.classList.add('active');
                        subitem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        found = true;
                        break;
                    }
                }
            }
        }
        
        if (!found) {
            alert(`No section found matching "${query}"`);
        }
    }
    
    // Desktop search
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Mobile search
    mobileSearchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(mobileSearchInput.value);
        }
    });
    // --- END SEARCH FUNCTIONALITY ---

    // search toggle for mobile
    const searchToggle = document.getElementById('searchToggle');
    const mobileSearchBar = document.getElementById('mobileSearchBar');
    let searchOpen = false;
    searchToggle?.addEventListener('click', ()=>{
        searchOpen = !searchOpen;
        mobileSearchBar.style.display = searchOpen ? 'block' : 'none';
        if(searchOpen){ document.getElementById('mobileSearchInput').focus(); }
    });

    document.addEventListener('click', (e)=>{
        if(!searchToggle?.contains(e.target) && !mobileSearchBar?.contains(e.target)){
            searchOpen = false;
            mobileSearchBar.style.display = 'none';
        }
    });

    document.getElementById('mobileCalendarBtn')?.addEventListener('click', ()=> alert('Open calendar (placeholder)'));
    document.getElementById('mobileNotifBtn')?.addEventListener('click', ()=> alert('No new notifications'));
    document.getElementById('notifBtn')?.addEventListener('click', ()=> alert('No new notifications'));
    document.getElementById('calendarBtn')?.addEventListener('click', ()=> alert('Open calendar (placeholder)'));
    
    // --- Per-subject percentage UI helpers ---
    function getCurrentMonthRecords(){
        try{
            const monthKey = new Date().toISOString().slice(0,7);
            const raw = localStorage.getItem('attendanceByMonth') || '{}';
            const by = JSON.parse(raw || '{}');
            return by[monthKey] || {};
        }catch(e){ console.error(e); return {}; }
    }

    function updatePerSubjectUI(){
        try{
            const records = getCurrentMonthRecords();
            const subjects = ['Physics','Mathematics','FPL','Mechanics','BEE'];
            subjects.forEach(subj=>{
                const r = records[subj] || { present:0, sessions:0, dates: [] };
                const sessions = r.sessions || 0;
                const present = r.present || 0;
                const pct = sessions ? Math.round((present / sessions) * 100) : 0;
                const pctEl = document.getElementById('sub-' + subj + '-percent');
                const progEl = document.getElementById('sub-' + subj + '-prog');
                if(pctEl) pctEl.textContent = pct + '%';
                if(progEl) progEl.style.width = Math.min(100, pct) + '%';
            });
        }catch(e){ console.error('updatePerSubjectUI failed', e); }
    }

    // ensure per-subject UI is set on init
    try{ updatePerSubjectUI(); }catch(e){ }
    }catch(err){ console.error('Initialization error in script.js:', err); }
});
