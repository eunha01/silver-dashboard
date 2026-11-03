// ==========================================
// 1. 초기 템플릿 데이터 정의
// ==========================================

const defaultChecklist = [
    { id: 1, text: "직영매장 VMMS 매출(마감현황), 쿠팡, 스마트스토어 매출 등 체크", checked: false },
    { id: 2, text: "국민은행 / 신한은행 통장 전체 분기마감 자료 다운로드", checked: false },
    { id: 3, text: "제리팀장 원두 수당 전달 (세무팀 전달해 급여에 수당 들어가게 처리)", checked: false },
    { id: 4, text: "마켓봄 부가세 신고내역 거래처별 수집 (회계관리 - 부가세신고내역 거래처별)", checked: false },
    { id: 5, text: "고정자산 잡히는 결제건 미리 폴더 저장 (결제건 중 고정자산 대상 확인)", checked: false },
    { id: 6, text: "바이저 차량운행 비용 정리", checked: false },
    { id: 7, text: "종이 세금계산서 및 영수증 취합", checked: false },
    { id: 8, text: "담방마을, 미아점 관리비 내역 확인", checked: false },
    { id: 9, text: "매출과 매입 내역의 제조금액 구분 (매출 92:8 / 초도물품 50:50)", checked: false },
    { id: 10, text: "[매월 말일] 직영점 알바비용/수당 세무사무소에 전달 (10일 전)", checked: false },
    { id: 11, text: "[매월 10일 전] 직원급여관련 변동내역 추가내역 등 전달 및 명세서 수령", checked: false }
];

const defaultTransfers = [
    { id: 1, date: "6/1", category: "과세", vendor: "관세법인충정", amount: 19800, memo: "우산꽂이 샘플 입고에 따른 관세수수료", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 2, date: "6/1", category: "과세", vendor: "(주)유로", amount: 1176240, memo: "유로부품 발주 미수금 정산(1~4월)", invoice: "발행 완료", completed: true, yearMonth: "2026-06" },
    { id: 3, date: "6/1", category: "과세", vendor: "(주)유로", amount: 1751200, memo: "유로 부품 발주(5/26발주건)", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 4, date: "6/2", category: "과세", vendor: "피에프", amount: 5720000, memo: "피에프 PET컵 1도인쇄", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 5, date: "6/4", category: "과세", vendor: "SKV1", amount: 200000, memo: "주차권 구매", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 6, date: "6/5", category: "과세", vendor: "프레스독(한휘주)", amount: 154000, memo: "파우더 기부 언론보도 송출_6월", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 7, date: "6/8", category: "과세", vendor: "피에프", amount: 18150000, memo: "PET컵 중평리드 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 8, date: "6/8", category: "과세", vendor: "벤딩캐리어", amount: 401500, memo: "2세대 제빙기 추출커버(니까조) 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 9, date: "6/11", category: "과세", vendor: "(주)정민", amount: 95000, memo: "의정부민락우미린점 포충기 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 10, date: "6/11", category: "과세", vendor: "시스세븐(조용백)", amount: 61500, memo: "의정부민락우미린점 휴지통 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 11, date: "6/11", category: "과세", vendor: "곽경득(경동택배)", amount: 14000, memo: "우산꽂이 샘플 발주 착불 택배비(지류 영수증 처리)", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 12, date: "6/16", category: "과세", vendor: "(주)마크로밀엠브레인", amount: 14300000, memo: "무인카페 이용행태 설문조사 용역비", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 13, date: "6/16", category: "과세", vendor: "(주)퓨어웰", amount: 1476000, memo: "퓨어웰 필터 발주(TFC코퍼레이션)", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 14, date: "6/16", category: "과세", vendor: "국가평생교육진흥원", amount: 24000, memo: "학점은행제 진행비용(현금영수증 발행)", invoice: "발행 완료", completed: true, yearMonth: "2026-06" },
    { id: 15, date: "6/17", category: "과세", vendor: "대현포장산업", amount: 1017500, memo: "소/중 사이즈 택배 박스 제작", invoice: "납품 후 세금계산서 발행 됨", completed: false, yearMonth: "2026-06" },
    { id: 16, date: "6/17", category: "과세", vendor: "(주)유로", amount: 81000, memo: "머신 부품 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 17, date: "6/18", category: "과세", vendor: "(주)정민", amount: 95000, memo: "동수원자이점 포충기 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 18, date: "6/18", category: "과세", vendor: "시즈세븐(조용백)", amount: 61500, memo: "동수원자이점 휴지통 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 19, date: "6/18", category: "과세", vendor: "카네스커피(하승우)", amount: 37800000, memo: "복숭아, 오미자 액상 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 20, date: "6/19", category: "과세", vendor: "(주)삼진씨엔에프", amount: 2724480, memo: "초코프레첼 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 21, date: "6/19", category: "과세", vendor: "나이스산업", amount: 25000, memo: "온수기 수전 꼭지 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 22, date: "6/19", category: "과세", vendor: "피에프", amount: 3465000, memo: "음료 비닐봉투 발주", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 23, date: "6/22", category: "과세", vendor: "황태영(달아드림)", amount: 528000, memo: "담방마을점 커튼 설치", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 24, date: "6/26", category: "과세", vendor: "안민석(착한클린)", amount: 275000, memo: "본사 청소 용역비(6월)", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 25, date: "6/26", category: "과세", vendor: "온비드 입찰보증금", amount: 380000, memo: "전북 물건 입찰보증금 (반환예정) - 반환완료(증빙필요X)", invoice: "반환 완료", completed: true, yearMonth: "2026-06" },
    { id: 26, date: "6/30", category: "과세", vendor: "대현포장산업", amount: 24530, memo: "박스 추가 제작에 따른 추납", invoice: "납품 후 세금계산서 발행 됨", completed: false, yearMonth: "2026-06" },
    { id: 27, date: "6/30", category: "과세", vendor: "(주)유로", amount: 726000, memo: "머신 부품 발주", invoice: "", completed: false, yearMonth: "2026-06" },

    // 면세
    { id: 28, date: "6/4", category: "면세", vendor: "블레스빈", amount: 103680000, memo: "하반기 생두 발주_1차 선금", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 29, date: "6/12", category: "면세", vendor: "레햄코리아", amount: 246000, memo: "생두 발주", invoice: "", completed: false, yearMonth: "2026-06" },

    // 예치금 및 이행보증금 반환
    { id: 30, date: "6/15", category: "반환", vendor: "광교산힐스점(신애리)", amount: 700000, memo: "마켓봄 예치금 오입금에 따른 반환 처리", invoice: "", completed: true, yearMonth: "2026-06" },

    // 머신 대금
    { id: 31, date: "6/1", category: "머신대금", vendor: "신이문대림점", amount: 16830000, memo: "5.18 발행", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 32, date: "6/1", category: "머신대금", vendor: "인천주안쌍용점", amount: 16830000, memo: "5.18 발행", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 33, date: "6/22", category: "머신대금", vendor: "의정부민락우미린점", amount: 16830000, memo: "6.15 발행", invoice: "", completed: false, yearMonth: "2026-06" },
    { id: 34, date: "6/26", category: "머신대금", vendor: "동수원자이점", amount: 16830000, memo: "6.15 발행", invoice: "", completed: false, yearMonth: "2026-06" }
];

const defaultRecurringTemplate = [
    { id: 1, vendor: "성수skv1센터 502호 회의실 사용료", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 2, vendor: "성수skv1센터 관리비 2곳 자동 이체(농협)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 3, vendor: "삼신전자공업인천공장 전기세+관리비 인천로스팅공장", date: "", amount: "", invoice: "", memo: "인천로스팅공장", disabled: false, completed: false },
    { id: 4, vendor: "송도 AT센터(인테리어 창고) 관리비", date: "", amount: "", invoice: "", memo: "창고 관리비", disabled: false, completed: false },
    { id: 5, vendor: "피에프인터내셔널도토리 부자재업체(3월부터 통장변경)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 6, vendor: "에스더블유에프엔비신우 파우더업체", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 7, vendor: "씨케이앤푸드-쿠키공장", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 8, vendor: "롯데택배로스팅공장택배", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 9, vendor: "로젠택배성수이용택배", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 10, vendor: "카네스 - 액상택배비용", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 11, vendor: "이당푸드 - 택배 비용", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 12, vendor: "세손(이외숙) - 포맥스 발주처", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 13, vendor: "보나컴퍼니 = 유로설치팀 2세대 필터2+수전", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 14, vendor: "소프트팩(주)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 15, vendor: "위펀 (직원생일선물 비용)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false },
    { id: 16, vendor: "티브라더스(팝콘)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false }
];

const initialRecurring = [
    { id: 1, vendor: "성수skv1센터 502호 회의실 사용료", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false, yearMonth: "2026-06" },
    { id: 2, vendor: "성수skv1센터 관리비 2곳 자동 이체(농협)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false, yearMonth: "2026-06" },
    { id: 3, vendor: "삼신전자공업인천공장 전기세+관리비 인천로스팅공장", date: "7/7", amount: 793216, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 4, vendor: "송도 AT센터(인테리어 창고) 관리비", date: "6/22", amount: 190390, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 5, vendor: "피에프인터내셔널도토리 부자재업체(3월부터 통장변경)", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false, yearMonth: "2026-06" },
    { id: 6, vendor: "에스더블유에프엔비신우 파우더업체", date: "7/2", amount: 39664350, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 7, vendor: "씨케이앤푸드-쿠키공장", date: "7/2", amount: 9139119, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 8, vendor: "롯데택배로스팅공장택배", date: "7/7", amount: 4534450, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 9, vendor: "로젠택배성수이용택배", date: "7/7", amount: 69000, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 10, vendor: "카네스 - 액상택배비용", date: "7/2", amount: 921150, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 11, vendor: "이당푸드 - 택배 비용", date: "7/7", amount: 176000, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 12, vendor: "세손(이외숙) - 포맥스 발주처", date: "6/30", amount: 494450, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 13, vendor: "보나컴퍼니 = 유로설치팀 2세대 필터2+수전", date: "", amount: "", invoice: "", memo: "", disabled: false, completed: false, yearMonth: "2026-06" },
    { id: 14, vendor: "소프트팩(주)", date: "6/30", amount: 4644420, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 15, vendor: "위펀 (직원생일선물 비용)", date: "7/7", amount: 200000, invoice: "발행 완료", memo: "송, 브루노", disabled: false, completed: true, yearMonth: "2026-06" },
    { id: 16, vendor: "티브라더스(팝콘)", date: "7/2", amount: 2428800, invoice: "발행 완료", memo: "", disabled: false, completed: true, yearMonth: "2026-06" }
];

const defaultSchedules = [
    { id: 1, type: "initial", store: "의정부민락우미린점", date: "6/10", completed: true, yearMonth: "2026-06" },
    { id: 2, type: "initial", store: "동수원자이점", date: "6/12", completed: false, yearMonth: "2026-06" },
    { id: 3, type: "machine", store: "의정부민락우미린점", date: "6/22", installed: true, depositReceived: true, transferredToVendor: true, yearMonth: "2026-06" },
    { id: 4, type: "machine", store: "동수원자이점", date: "6/26", installed: true, depositReceived: true, transferredToVendor: false, yearMonth: "2026-06" },
    { id: 5, type: "samsung", store: "신이문대림점", date: "6/30", completed: false, yearMonth: "2026-06" }
];

const defaultYouthGrants = [
    { id: 1, employee: "홍길동", date: "7/10", completed: false, yearMonth: "2026-06" },
    { id: 2, employee: "이몽룡", date: "7/10", completed: true, yearMonth: "2026-06" }
];

const defaultPrivateVendors = [
    { id: 1, vendor: "A호텔 송도점", product: "프리미엄 원두 50kg", date: "6/5", amount: 1500000, invoiceDate: "6/5 발행", invoiced: true, collected: true, memo: "세금계산서 완료 및 수금 완료 건", yearMonth: "2026-06" },
    { id: 2, vendor: "B코퍼레이션 본사", product: "에스프레소 블렌드 30kg", date: "6/15", amount: 900000, invoiceDate: "", invoiced: false, collected: false, memo: "계산서 발행 대기 및 미수금", yearMonth: "2026-06" }
];

const defaultCalendarEvents = [
    { id: 1, title: "경영지원팀 결산보고 정리", date: "2026-07-08", color: "purple" },
    { id: 2, title: "직원 급여 이체 & 장려금 신청", date: "2026-07-10", color: "purple" },
    { id: 3, title: "세금계산서 마감 및 매입매출 정리", date: "2026-07-10", color: "blue" },
    { id: 4, title: "직영점 알바비용 세무서 전달", date: "2026-07-30", color: "purple" }
];

// ==========================================
// 2. 어플리케이션 상태 객체
// ==========================================

const state = {
    checklist: JSON.parse(localStorage.getItem('checklist')) || defaultChecklist,
    transfers: JSON.parse(localStorage.getItem('transfers')) || defaultTransfers,
    recurring: JSON.parse(localStorage.getItem('recurring')) || initialRecurring,
    privateVendors: JSON.parse(localStorage.getItem('privateVendors')) || defaultPrivateVendors,
    schedules: JSON.parse(localStorage.getItem('schedules')) || defaultSchedules,
    youthGrants: JSON.parse(localStorage.getItem('youthGrants')) || defaultYouthGrants,
    calendarEvents: JSON.parse(localStorage.getItem('calendarEvents')) || defaultCalendarEvents,
    
    currentTab: 'tab-overview',
    transferInvoiceFilterOnlyUncompleted: false,
    
    currentYear: 2026,
    currentMonth: 7, // 8월 (0-indexed)
    
    sortCriteria: 'date-asc',
    searchKeyword: '',
    
    selectedDateStr: ''
};

function saveState(key, data) {
    state[key] = data;
    localStorage.setItem(key, JSON.stringify(data));
    updateOverviewStats();
}

function formatNumber(num) {
    if (isNaN(num) || num === "" || num === null) return "0";
    return Number(num).toLocaleString('ko-KR');
}

function parseNumber(str) {
    if (!str) return 0;
    if (typeof str === 'number') return str;
    return Number(str.replace(/,/g, ''));
}

function getYearMonthString() {
    const y = state.currentYear;
    const m = String(state.currentMonth + 1).padStart(2, '0');
    return `${y}-${m}`;
}

function parseDateToVal(dateStr) {
    if (!dateStr) return 9999;
    const parts = dateStr.split('/');
    if (parts.length === 2) {
        const m = parseInt(parts[0], 10);
        const d = parseInt(parts[1], 10);
        return m * 100 + d;
    }
    return 9999;
}

// ==========================================
// 3. 월별 데이터 초기 구성 및 전환
// ==========================================

function initYearMonthControls() {
    const yearSelect = document.getElementById('global-year-select');
    const monthSelect = document.getElementById('global-month-select');
    
    if (!yearSelect || !monthSelect) return;
    
    yearSelect.innerHTML = '';
    for (let y = 2025; y <= 2027; y++) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.innerText = `${y}년`;
        yearSelect.appendChild(opt);
    }
    
    monthSelect.innerHTML = '';
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = m - 1;
        opt.innerText = `${m}월`;
        monthSelect.appendChild(opt);
    }
    
    yearSelect.value = state.currentYear;
    monthSelect.value = state.currentMonth;
    
    yearSelect.addEventListener('change', (e) => {
        state.currentYear = parseInt(e.target.value, 10);
        handleYearMonthChange();
    });
    
    monthSelect.addEventListener('change', (e) => {
        state.currentMonth = parseInt(e.target.value, 10);
        handleYearMonthChange();
    });
}

function handleYearMonthChange() {
    checkAndCreateMonthlyRecurring();
    switchTab(state.currentTab);
    
    const yearSelect = document.getElementById('global-year-select');
    const monthSelect = document.getElementById('global-month-select');
    if (yearSelect) yearSelect.value = state.currentYear;
    if (monthSelect) monthSelect.value = state.currentMonth;
}

function checkAndCreateMonthlyRecurring() {
    const ym = getYearMonthString();
    const exists = state.recurring.some(item => item.yearMonth === ym);
    
    if (!exists) {
        state.recurring = state.recurring.map(item => {
            if (!item.yearMonth) return { ...item, yearMonth: "2026-06" };
            return item;
        });
        
        const newMonthlyRecurring = defaultRecurringTemplate.map(item => {
            return {
                ...item,
                id: Date.now() + Math.random(),
                yearMonth: ym
            };
        });
        
        const updated = [...state.recurring, ...newMonthlyRecurring];
        saveState('recurring', updated);
    }
}

// ==========================================
// 4. 네비게이션 & 탭 전환
// ==========================================

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-tab');
        switchTab(targetTab);
    });
});

function switchTab(tabId) {
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.add('active');
    state.currentTab = tabId;

    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const ymLabel = `${state.currentYear}년 ${state.currentMonth + 1}월`;

    switch (tabId) {
        case 'tab-overview':
            pageTitle.innerText = "종합 대시보드";
            pageSubtitle.innerText = `${ymLabel} | 주요 알림, 체크리스트, 스케줄링 요약`;
            renderOverviewTab();
            break;
        case 'tab-transfers':
            pageTitle.innerText = "이체 및 세금계산서 관리";
            pageSubtitle.innerText = `${ymLabel} | 매일 이체 건 등록 및 세금계산서 마감 여부 기록`;
            renderTransfersTable();
            // 탭 로드 시 메모장 로드
            initBlackboardMemo();
            break;
        case 'tab-recurring':
            pageTitle.innerText = "매월 정기결제 항목";
            pageSubtitle.innerText = `${ymLabel} | 매달 자동으로 나가는 정기 지출 및 고정비 이체 여부 확인`;
            renderRecurringTable();
            break;
        case 'tab-private-vendors':
            pageTitle.innerText = "개인거래처 납품 관리";
            pageSubtitle.innerText = `${ymLabel} | 호텔, 회사 등 개인거래처 납품 내역 기재 및 수금 체크`;
            renderPrivateVendorsTable();
            break;
        case 'tab-schedules':
            pageTitle.innerText = "매장 일정 & 정부지원금";
            pageSubtitle.innerText = `${ymLabel} | 초도물품, 머신대금, 삼성카드 일정 및 청년도약장려금 관리`;
            renderSchedulesTab();
            break;
        case 'tab-calendar':
            pageTitle.innerText = "업무 캘린더";
            pageSubtitle.innerText = `${ymLabel} | 한눈에 파악하는 마감 스케줄 및 지출 캘린더`;
            renderCalendar();
            break;
    }
}

// ==========================================
// 5. 통계 및 요약 업데이트
// ==========================================

function updateOverviewStats() {
    const ym = getYearMonthString();
    const monthlyTransfers = state.transfers.filter(t => t.yearMonth === ym);
    const uncompletedCount = monthlyTransfers.filter(t => !t.completed).length;
    
    const badgeCount = document.getElementById('uncompleted-invoices-count');
    if (badgeCount) {
        badgeCount.innerText = uncompletedCount;
    }
}

// ==========================================
// 6. 종합 대시보드 탭 로직
// ==========================================

function renderOverviewTab() {
    renderTaxChecklist();
    renderOverviewTransferList();
    renderOverviewSchedules();
    updateOverviewStats();
}

// 회계사 사무실 체크리스트
function renderTaxChecklist() {
    const container = document.getElementById('tax-checklist');
    if (!container) return;
    container.innerHTML = '';
    
    state.checklist.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'checklist-item';
        itemEl.innerHTML = `
            <label style="position: relative; cursor: pointer;">
                <input type="checkbox" data-id="${item.id}" ${item.checked ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
            </label>
            <span class="checklist-text">${item.text}</span>
        `;
        
        itemEl.querySelector('input').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            const updated = state.checklist.map(c => c.id === id ? { ...c, checked: e.target.checked } : c);
            saveState('checklist', updated);
        });
        
        container.appendChild(itemEl);
    });
}

// 메모장 컴포넌트 자동저장 연동
function initBlackboardMemo() {
    const memoTextarea = document.getElementById('blackboard-memo');
    if (!memoTextarea) return;
    
    // 메모장 로컬스토리지 연동 로드
    memoTextarea.value = localStorage.getItem('blackboardMemo') || '';
    
    // 칠판 입력 시 자동저장 이벤트 (중복 방지 위해 1회 등록)
    if (!memoTextarea.dataset.bound) {
        memoTextarea.addEventListener('input', (e) => {
            localStorage.setItem('blackboardMemo', e.target.value);
        });
        memoTextarea.dataset.bound = "true";
    }
}

// 제조금액 구분 계산기 로직
const calcAmount = document.getElementById('calc-amount');
const calcType = document.getElementById('calc-type');
const calcProductVal = document.getElementById('calc-product-val');
const calcGoodsVal = document.getElementById('calc-goods-val');

if (calcAmount) {
    calcAmount.addEventListener('input', (e) => {
        let cleanVal = e.target.value.replace(/[^0-9]/g, '');
        if (cleanVal) {
            e.target.value = Number(cleanVal).toLocaleString('ko-KR');
        } else {
            e.target.value = '';
        }
        calculateManufacture();
    });
    
    calcType.addEventListener('change', calculateManufacture);
}

function calculateManufacture() {
    const totalAmount = parseNumber(calcAmount.value);
    if (!totalAmount) {
        calcProductVal.innerText = '0';
        calcGoodsVal.innerText = '0';
        return;
    }

    const type = calcType.value;
    let productAmt = 0;
    let goodsAmt = 0;

    if (type === 'normal') {
        productAmt = Math.round(totalAmount * 0.92);
        goodsAmt = totalAmount - productAmt;
    } else if (type === 'initial') {
        productAmt = Math.round(totalAmount * 0.50);
        goodsAmt = totalAmount - productAmt;
    }

    calcProductVal.innerText = formatNumber(productAmt);
    calcGoodsVal.innerText = formatNumber(goodsAmt);
}

// 종합화면 최근 이체 현황 요약
function renderOverviewTransferList() {
    const tbody = document.getElementById('overview-transfer-table');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    const monthlyList = state.transfers.filter(t => t.yearMonth === ym);
    const sorted = [...monthlyList].sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
    
    const sliced = sorted.slice(-5).reverse();
    if (sliced.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: var(--text-muted); padding: 1rem;">최근 등록된 내역이 없습니다.</td></tr>`;
        return;
    }
    
    sliced.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td>${item.vendor}</td>
            <td class="text-right">${formatNumber(item.amount)}원</td>
            <td>
                <span class="badge ${item.completed ? 'badge-cyan' : 'badge-amber'}">
                    ${item.completed ? '정산완료' : '계산서미완'}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 종합화면 스케줄 요약
function renderOverviewSchedules() {
    const container = document.getElementById('overview-schedule-list');
    if (!container) return;
    container.innerHTML = '';
    
    const ym = getYearMonthString();
    const monthlySchedules = state.schedules.filter(s => s.yearMonth === ym);
    
    const uncompletedStore = monthlySchedules.filter(s => {
        if (s.type === 'initial' || s.type === 'samsung') return !s.completed;
        if (s.type === 'machine') return !(s.installed && s.depositReceived && s.transferredToVendor);
        return false;
    }).slice(0, 3);

    if (uncompletedStore.length === 0) {
        container.innerHTML = `<div style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 1rem;">현재 진행 예정인 매장 스케줄이 없습니다.</div>`;
        return;
    }

    uncompletedStore.forEach(item => {
        let typeText = "";
        let details = "";
        
        if (item.type === 'initial') {
            typeText = "초도 발주";
            details = `${item.date} 예정 | 발주 대기`;
        } else if (item.type === 'machine') {
            typeText = "머신 설치";
            details = `${item.date} 예정 | ${!item.installed ? '설치대기' : !item.depositReceived ? '입금대기' : '이체대기'}`;
        } else {
            typeText = "삼성카드";
            details = `${item.date} 결제 예정`;
        }

        const div = document.createElement('div');
        div.className = 'schedule-item flex-between';
        div.style = 'background: #ffffff; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--card-border);';
        div.innerHTML = `
            <div>
                <span class="badge badge-purple" style="margin-right: 0.5rem;">${typeText}</span>
                <strong style="font-size: 0.9rem;">${item.store}</strong>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">${details}</div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 0.8rem;"></i>
        `;
        container.appendChild(div);
    });
}

// ==========================================
// 7. 이체 및 계산서 탭 로직 (헤더 정렬 기능 추가)
// ==========================================

const transferForm = document.getElementById('transfer-form');
const btnFilterInvoice = document.getElementById('btn-filter-invoice');
const btnExportTransfers = document.getElementById('btn-export-transfers');
const chkSelectAllTf = document.getElementById('chk-select-all-tf');
const btnCopySelected = document.getElementById('btn-copy-selected');
const btnCopyUncompleted = document.getElementById('btn-copy-uncompleted');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');

if (transferForm) {
    transferForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const date = document.getElementById('tf-date').value.trim();
        const vendor = document.getElementById('tf-vendor').value.trim();
        const amount = Number(document.getElementById('tf-amount').value);
        const category = document.getElementById('tf-category').value;
        const invoice = document.getElementById('tf-invoice').value.trim();
        const memo = document.getElementById('tf-memo').value.trim();
        const ym = getYearMonthString();

        const newTransfer = {
            id: Date.now(),
            date,
            vendor,
            amount,
            category,
            invoice,
            memo,
            completed: invoice.includes("완료") || invoice.includes("완"),
            yearMonth: ym
        };

        const updated = [...state.transfers, newTransfer];
        updated.sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
        
        saveState('transfers', updated);
        
        transferForm.reset();
        renderTransfersTable();
        syncTransferToCalendar(newTransfer);
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        state.searchKeyword = e.target.value.trim().toLowerCase();
        renderTransfersTable();
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        state.sortCriteria = e.target.value;
        renderTransfersTable();
    });
}

if (btnFilterInvoice) {
    btnFilterInvoice.addEventListener('click', () => {
        state.transferInvoiceFilterOnlyUncompleted = !state.transferInvoiceFilterOnlyUncompleted;
        if (state.transferInvoiceFilterOnlyUncompleted) {
            btnFilterInvoice.classList.add('active');
            btnFilterInvoice.style.background = 'var(--primary)';
            btnFilterInvoice.style.color = 'var(--text-light)';
            btnFilterInvoice.style.borderColor = 'var(--primary)';
        } else {
            btnFilterInvoice.classList.remove('active');
            btnFilterInvoice.style.background = '';
            btnFilterInvoice.style.color = '';
            btnFilterInvoice.style.borderColor = '';
        }
        renderTransfersTable();
    });
}

if (btnExportTransfers) {
    btnExportTransfers.addEventListener('click', exportTransfersToCSV);
}

if (chkSelectAllTf) {
    chkSelectAllTf.addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.querySelectorAll('.chk-tf-item').forEach(chk => {
            chk.checked = checked;
        });
    });
}

if (btnCopySelected) {
    btnCopySelected.addEventListener('click', () => {
        const checkedBoxes = document.querySelectorAll('.chk-tf-item:checked');
        if (checkedBoxes.length === 0) {
            showToast("복사할 항목을 선택해 주세요!");
            return;
        }
        
        let textList = [];
        checkedBoxes.forEach(chk => {
            const id = Number(chk.getAttribute('data-id'));
            const item = state.transfers.find(t => t.id === id);
            if (item) {
                textList.push(formatClipboardText(item));
            }
        });
        
        copyToClipboard(textList.join('\n'));
    });
}

if (btnCopyUncompleted) {
    btnCopyUncompleted.addEventListener('click', () => {
        const ym = getYearMonthString();
        const uncompleted = state.transfers.filter(t => t.yearMonth === ym && !t.completed);
        
        if (uncompleted.length === 0) {
            showToast("계산서 미발행 건이 없습니다!");
            return;
        }
        
        const sorted = [...uncompleted].sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
        const text = sorted.map(item => formatClipboardText(item)).join('\n');
        
        copyToClipboard(text);
    });
}

function formatClipboardText(item) {
    const memoPart = item.memo ? ` - ${item.memo}` : '';
    return `${item.date} ${item.vendor} / ${formatNumber(item.amount)}${memoPart}`;
}

function copyToClipboard(text) {
    if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast("텍스트가 클립보드에 복사되었습니다!");
        } catch (err) {
            alert("복사에 실패했습니다.");
        }
        document.body.removeChild(textArea);
        return;
    }
    
    navigator.clipboard.writeText(text)
        .then(() => {
            showToast("텍스트가 클립보드에 복사되었습니다!");
        })
        .catch(err => {
            alert("복사에 실패했습니다.");
        });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--sidebar-bg);
        color: var(--text-light);
        padding: 0.8rem 1.6rem;
        border-radius: 30px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 2000;
        box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        border: 1px solid var(--accent);
        opacity: 0;
        transition: opacity 0.3s, bottom 0.3s;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.bottom = '40px';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.bottom = '30px';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// 헤더 정렬 지시자 화살표 아이콘 업데이트
function updateHeaderSortIcons() {
    document.querySelectorAll('.sortable-header').forEach(header => {
        const sortField = header.getAttribute('data-sort');
        const icon = header.querySelector('i');
        if (!icon) return;
        
        if (state.sortCriteria === `${sortField}-asc`) {
            icon.className = "fa-solid fa-sort-up";
            icon.style.color = "var(--primary)";
        } else if (state.sortCriteria === `${sortField}-desc`) {
            icon.className = "fa-solid fa-sort-down";
            icon.style.color = "var(--primary)";
        } else {
            icon.className = "fa-solid fa-sort";
            icon.style.color = "";
        }
    });
}

// 테이블 헤더 클릭 이벤트 등록 (1회만 등록 보장)
function initHeaderSortEvents() {
    document.querySelectorAll('.sortable-header').forEach(header => {
        if (!header.dataset.bound) {
            header.addEventListener('click', (e) => {
                const sortField = e.currentTarget.getAttribute('data-sort');
                let nextCriteria = `${sortField}-asc`;
                
                if (state.sortCriteria === `${sortField}-asc`) {
                    nextCriteria = `${sortField}-desc`;
                } else if (state.sortCriteria === `${sortField}-desc`) {
                    nextCriteria = `${sortField}-asc`;
                }
                
                state.sortCriteria = nextCriteria;
                
                // 상단 셀렉트 동기화
                const sortSelect = document.getElementById('sort-select');
                if (sortSelect) {
                    const matchingOption = Array.from(sortSelect.options).find(opt => opt.value === nextCriteria);
                    if (matchingOption) {
                        sortSelect.value = nextCriteria;
                    }
                }
                
                renderTransfersTable();
            });
            header.dataset.bound = "true";
        }
    });
}

function renderTransfersTable() {
    const tbody = document.getElementById('transfer-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    let list = state.transfers.filter(t => {
        if (!t.yearMonth) t.yearMonth = "2026-06";
        return t.yearMonth === ym;
    });
    
    if (state.searchKeyword) {
        list = list.filter(t => 
            t.vendor.toLowerCase().includes(state.searchKeyword) || 
            (t.memo && t.memo.toLowerCase().includes(state.searchKeyword)) ||
            t.date.includes(state.searchKeyword) ||
            t.category.includes(state.searchKeyword)
        );
    }
    
    if (state.transferInvoiceFilterOnlyUncompleted) {
        list = list.filter(t => !t.completed);
    }
    
    // 정렬 로직 분기 확장
    if (state.sortCriteria === 'date-asc') {
        list.sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
    } else if (state.sortCriteria === 'date-desc') {
        list.sort((a, b) => parseDateToVal(b.date) - parseDateToVal(a.date));
    } else if (state.sortCriteria === 'category-asc') {
        list.sort((a, b) => a.category.localeCompare(b.category, 'ko'));
    } else if (state.sortCriteria === 'category-desc') {
        list.sort((a, b) => b.category.localeCompare(a.category, 'ko'));
    } else if (state.sortCriteria === 'vendor-asc') {
        list.sort((a, b) => a.vendor.localeCompare(b.vendor, 'ko'));
    } else if (state.sortCriteria === 'vendor-desc') {
        list.sort((a, b) => b.vendor.localeCompare(a.vendor, 'ko'));
    } else if (state.sortCriteria === 'amount-asc') {
        list.sort((a, b) => a.amount - b.amount);
    } else if (state.sortCriteria === 'amount-desc') {
        list.sort((a, b) => b.amount - a.amount);
    }
    
    if (chkSelectAllTf) chkSelectAllTf.checked = false;
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="text-center" style="color: var(--text-muted); padding: 2rem;">검색 결과가 없거나 등록된 이체 내역이 없습니다.</td></tr>`;
        updateHeaderSortIcons();
        return;
    }
    
    list.forEach(item => {
        const tr = document.createElement('tr');
        if (item.completed) {
            tr.className = 'row-completed';
        }
        
        tr.innerHTML = `
            <td class="text-center">
                <label style="position: relative; cursor: pointer; display: inline-block; vertical-align: middle;">
                    <input type="checkbox" class="chk-tf-item" data-id="${item.id}" style="display: none !important;">
                    <span class="checkbox-custom" style="width: 18px; height: 18px; border-radius: 4px; margin: 0;"></span>
                </label>
            </td>
            <td>
                <input type="text" class="table-input" value="${item.date}" data-id="${item.id}" data-field="date">
            </td>
            <td>
                <select class="table-input" data-id="${item.id}" data-field="category">
                    <option value="과세" ${item.category === '과세' ? 'selected' : ''}>과세</option>
                    <option value="면세" ${item.category === '면세' ? 'selected' : ''}>면세</option>
                    <option value="반환" ${item.category === '반환' ? 'selected' : ''}>반환</option>
                    <option value="머신대금" ${item.category === '머신대금' ? 'selected' : ''}>머신대금</option>
                </select>
            </td>
            <td>
                <input type="text" class="table-input" value="${item.vendor}" data-id="${item.id}" data-field="vendor" style="font-weight: 600;">
            </td>
            <td>
                <input type="text" class="table-input text-right" value="${formatNumber(item.amount)}" data-id="${item.id}" data-field="amount" style="font-weight: 500;">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.memo || ''}" data-id="${item.id}" data-field="memo">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.invoice || ''}" data-id="${item.id}" data-field="invoice" placeholder="미발행">
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="completed" ${item.completed ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <button class="btn-secondary btn-sm single-copy-btn" data-id="${item.id}" style="padding: 0.35rem 0.6rem; border-color: var(--card-border);"><i class="fa-solid fa-copy"></i></button>
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm delete-transfer-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelectorAll('.table-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = Number(e.target.getAttribute('data-id'));
                const field = e.target.getAttribute('data-field');
                let value = e.target.value.trim();
                
                if (field === 'amount') {
                    value = parseNumber(value);
                    e.target.value = formatNumber(value);
                }
                
                updateTransferItem(id, field, value);
            });
        });

        tr.querySelector('input[data-field="completed"]').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            updateTransferItem(id, 'completed', e.target.checked);
        });

        tr.querySelector('.single-copy-btn').addEventListener('click', (e) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            const target = state.transfers.find(t => t.id === id);
            if (target) {
                copyToClipboard(formatClipboardText(target));
            }
        });

        tr.querySelector('.delete-transfer-btn').addEventListener('click', (e) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            if (confirm("정말 이 이체 내역을 삭제하시겠습니까?")) {
                const updated = state.transfers.filter(t => t.id !== id);
                saveState('transfers', updated);
                renderTransfersTable();
            }
        });

        tbody.appendChild(tr);
    });

    updateHeaderSortIcons();
}

function updateTransferItem(id, field, value) {
    const updated = state.transfers.map(item => {
        if (item.id === id) {
            const newItem = { ...item, [field]: value };
            if (field === 'invoice') {
                if (value.includes("완료") || value.includes("완")) {
                    newItem.completed = true;
                }
            }
            if (field === 'completed') {
                if (value === true && !newItem.invoice) {
                    newItem.invoice = "발행 완료";
                } else if (value === false && newItem.invoice === "발행 완료") {
                    newItem.invoice = "";
                }
            }
            return newItem;
        }
        return item;
    });
    
    if (field === 'date') {
        updated.sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
    }
    
    saveState('transfers', updated);
    
    if (field === 'completed' || field === 'invoice' || field === 'date') {
        renderTransfersTable();
    }
}

function syncTransferToCalendar(transfer) {
    const parts = transfer.date.split('/');
    if (parts.length === 2) {
        const m = parts[0].padStart(2, '0');
        const d = parts[1].padStart(2, '0');
        const dateStr = `2026-${m}-${d}`;
        const newEvent = {
            id: Date.now() + 1,
            title: `${transfer.vendor} 이체`,
            date: dateStr,
            color: 'blue'
        };
        const updated = [...state.calendarEvents, newEvent];
        saveState('calendarEvents', updated);
    }
}

function exportTransfersToCSV() {
    let csvContent = "\uFEFF";
    csvContent += "이체일,구분,업체명,금액,내용/적요,세금계산서 발행여부,정산완료여부\n";
    
    const ym = getYearMonthString();
    const filtered = state.transfers.filter(t => t.yearMonth === ym);
    const sorted = [...filtered].sort((a, b) => parseDateToVal(a.date) - parseDateToVal(b.date));
    
    sorted.forEach(item => {
        const row = [
            item.date,
            item.category,
            item.vendor,
            item.amount,
            `"${item.memo || ''}"`,
            `"${item.invoice || ''}"`,
            item.completed ? "완료" : "미완료"
        ].join(",");
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `카페프리헷_이체내역_${ym}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==========================================
// 8. 매월 정기결제 관리 탭 로직 (고정비)
// ==========================================

const btnAddRecurring = document.getElementById('btn-add-recurring');
if (btnAddRecurring) {
    btnAddRecurring.addEventListener('click', () => {
        const ym = getYearMonthString();
        const newRecurring = {
            id: Date.now(),
            vendor: "신규 정기 항목",
            date: "",
            amount: "",
            invoice: "",
            memo: "",
            disabled: false,
            completed: false,
            yearMonth: ym
        };
        
        const updated = [...state.recurring, newRecurring];
        saveState('recurring', updated);
        renderRecurringTable();
    });
}

function renderRecurringTable() {
    const tbody = document.getElementById('recurring-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const ym = getYearMonthString();
    const monthlyList = state.recurring.filter(item => item.yearMonth === ym);
    
    if (monthlyList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center" style="color: var(--text-muted); padding: 2rem;">등록된 정기 지출이 없습니다.</td></tr>`;
        return;
    }
    
    monthlyList.forEach(item => {
        const tr = document.createElement('tr');
        
        if (item.disabled) {
            tr.className = 'row-disabled';
        } else if (item.completed) {
            tr.className = 'row-completed';
        }
        
        tr.innerHTML = `
            <td>
                <input type="text" class="table-input" value="${item.vendor}" data-id="${item.id}" data-field="vendor" style="font-weight: 600;">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.date || ''}" data-id="${item.id}" data-field="date" placeholder="예: 7/7">
            </td>
            <td>
                <input type="text" class="table-input text-right" value="${item.amount ? formatNumber(item.amount) : ''}" data-id="${item.id}" data-field="amount" placeholder="금액 입력">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.invoice || ''}" data-id="${item.id}" data-field="invoice" placeholder="계산서 발행일">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.memo || ''}" data-id="${item.id}" data-field="memo" placeholder="비고 기재">
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" class="toggle-disable-btn" data-id="${item.id}" ${item.disabled ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom" style="border-color: var(--danger);"></span>
                </label>
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" class="toggle-complete-btn" data-id="${item.id}" ${item.completed ? 'checked' : ''} ${item.disabled ? 'disabled' : ''} style="display: none !important;">
                    <span class="checkbox-custom" style="border-color: var(--success);"></span>
                </label>
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm delete-rec-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelectorAll('.table-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = Number(e.target.getAttribute('data-id'));
                const field = e.target.getAttribute('data-field');
                let value = e.target.value.trim();
                
                if (field === 'amount') {
                    value = parseNumber(value);
                    e.target.value = formatNumber(value);
                }
                
                updateRecurringItem(id, field, value);
            });
        });

        tr.querySelector('.toggle-disable-btn').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            const checked = e.target.checked;
            
            const updated = state.recurring.map(rec => {
                if (rec.id === id) {
                    return { 
                        ...rec, 
                        disabled: checked,
                        completed: checked ? false : rec.completed 
                    };
                }
                return rec;
            });
            saveState('recurring', updated);
            renderRecurringTable();
        });

        tr.querySelector('.toggle-complete-btn').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            updateRecurringItem(id, 'completed', e.target.checked);
        });

        tr.querySelector('.delete-rec-btn').addEventListener('click', (e) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            if (confirm("정말 이 정기결제 지출 항목을 목록에서 삭제하시겠습니까?")) {
                const updated = state.recurring.filter(rec => rec.id !== id);
                saveState('recurring', updated);
                renderRecurringTable();
            }
        });

        tbody.appendChild(tr);
    });
}

function updateRecurringItem(id, field, value) {
    const updated = state.recurring.map(item => {
        if (item.id === id) {
            return { ...item, [field]: value };
        }
        return item;
    });
    saveState('recurring', updated);
    
    if (field === 'completed' || field === 'vendor') {
        renderRecurringTable();
    }
}

// ==========================================
// 8.1 개인거래처 납품 관리 탭 로직 (신설)
// ==========================================

const btnAddPv = document.getElementById('btn-add-pv');
if (btnAddPv) {
    btnAddPv.addEventListener('click', () => {
        const ym = getYearMonthString();
        const newPv = {
            id: Date.now(),
            vendor: "신규 개인거래처",
            product: "",
            date: "",
            amount: "",
            invoiceDate: "",
            invoiced: false,
            collected: false,
            memo: "",
            yearMonth: ym
        };
        
        const updated = [...state.privateVendors, newPv];
        saveState('privateVendors', updated);
        renderPrivateVendorsTable();
    });
}

function renderPrivateVendorsTable() {
    const tbody = document.getElementById('pv-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    const monthlyList = state.privateVendors.filter(item => {
        if (!item.yearMonth) item.yearMonth = "2026-06";
        return item.yearMonth === ym;
    });
    
    if (monthlyList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="color: var(--text-muted); padding: 2rem;">등록된 개인거래처 납품 내역이 없습니다.</td></tr>`;
        return;
    }
    
    monthlyList.forEach(item => {
        const tr = document.createElement('tr');
        
        if (item.invoiced && item.collected) {
            tr.className = 'row-completed';
        }
        
        tr.innerHTML = `
            <td>
                <input type="text" class="table-input" value="${item.vendor}" data-id="${item.id}" data-field="vendor" style="font-weight: 600;">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.product || ''}" data-id="${item.id}" data-field="product" placeholder="예: 원두 10kg">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.date || ''}" data-id="${item.id}" data-field="date" placeholder="예: 8/25">
            </td>
            <td>
                <input type="text" class="table-input text-right" value="${item.amount ? formatNumber(item.amount) : ''}" data-id="${item.id}" data-field="amount" placeholder="금액 입력">
            </td>
            <td>
                <input type="text" class="table-input" value="${item.invoiceDate || ''}" data-id="${item.id}" data-field="invoiceDate" placeholder="계산서 발행일">
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" class="toggle-pv-invoice" data-id="${item.id}" ${item.invoiced ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom" style="border-color: var(--success);"></span>
                </label>
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" class="toggle-pv-collect" data-id="${item.id}" ${item.collected ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom" style="border-color: var(--secondary);"></span>
                </label>
            </td>
            <td>
                <input type="text" class="table-input" value="${item.memo || ''}" data-id="${item.id}" data-field="memo" placeholder="메모 기재">
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm delete-pv-btn" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelectorAll('.table-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = Number(e.target.getAttribute('data-id'));
                const field = e.target.getAttribute('data-field');
                let value = e.target.value.trim();
                
                if (field === 'amount') {
                    value = parseNumber(value);
                    e.target.value = formatNumber(value);
                }
                
                updatePrivateVendorItem(id, field, value);
            });
        });

        tr.querySelector('.toggle-pv-invoice').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            updatePrivateVendorItem(id, 'invoiced', e.target.checked);
        });

        tr.querySelector('.toggle-pv-collect').addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id'));
            updatePrivateVendorItem(id, 'collected', e.target.checked);
        });

        tr.querySelector('.delete-pv-btn').addEventListener('click', (e) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            if (confirm("정말 이 개인거래처 납품 내역을 삭제하시겠습니까?")) {
                const updated = state.privateVendors.filter(pv => pv.id !== id);
                saveState('privateVendors', updated);
                renderPrivateVendorsTable();
            }
        });

        tbody.appendChild(tr);
    });
}

function updatePrivateVendorItem(id, field, value) {
    const updated = state.privateVendors.map(item => {
        if (item.id === id) {
            const newItem = { ...item, [field]: value };
            if (field === 'invoiced' && value === true && !newItem.invoiceDate) {
                newItem.invoiceDate = "발행 완료";
            } else if (field === 'invoiced' && value === false && newItem.invoiceDate === "발행 완료") {
                newItem.invoiceDate = "";
            }
            return newItem;
        }
        return item;
    });
    saveState('privateVendors', updated);
    
    if (field === 'invoiced' || field === 'collected' || field === 'vendor') {
        renderPrivateVendorsTable();
    }
}

// ==========================================
// 9. 매장 일정 & 정부지원금 관리
// ==========================================

const storeScheduleForm = document.getElementById('store-schedule-form');
const youthGrantForm = document.getElementById('youth-grant-form');

if (storeScheduleForm) {
    storeScheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const store = document.getElementById('sch-store').value.trim();
        const type = document.getElementById('sch-type').value;
        const date = document.getElementById('sch-date').value.trim();
        const ym = getYearMonthString();

        const newSchedule = {
            id: Date.now(),
            type,
            store,
            date,
            yearMonth: ym
        };

        if (type === 'initial' || type === 'samsung') {
            newSchedule.completed = false;
        } else if (type === 'machine') {
            newSchedule.installed = false;
            newSchedule.depositReceived = false;
            newSchedule.transferredToVendor = false;
        }

        const updated = [...state.schedules, newSchedule];
        saveState('schedules', updated);
        
        storeScheduleForm.reset();
        renderSchedulesTab();
    });
}

if (youthGrantForm) {
    youthGrantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const employee = document.getElementById('yg-employee').value.trim();
        const ym = getYearMonthString();
        const newGrant = {
            id: Date.now(),
            employee,
            date: "10일",
            completed: false,
            yearMonth: ym
        };

        const updated = [...state.youthGrants, newGrant];
        saveState('youthGrants', updated);
        
        youthGrantForm.reset();
        renderSchedulesTab();
    });
}

function renderSchedulesTab() {
    renderInitialStores();
    renderMachineStores();
    renderSamsungStores();
    renderYouthGrantList();
}

function renderInitialStores() {
    const tbody = document.getElementById('tbl-initial-stores');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    const list = state.schedules.filter(s => {
        if (!s.yearMonth) s.yearMonth = "2026-06";
        return s.type === 'initial' && s.yearMonth === ym;
    });
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: var(--text-muted);">등록된 매장이 없습니다.</td></tr>`;
        return;
    }

    list.forEach(item => {
        const tr = document.createElement('tr');
        if (item.completed) tr.className = 'row-completed';
        
        tr.innerHTML = `
            <td><strong>${item.store}</strong></td>
            <td>${item.date}</td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="completed" ${item.completed ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm btn-delete-sch" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
            updateScheduleItem(item.id, 'completed', e.target.checked);
        });

        tr.querySelector('.btn-delete-sch').addEventListener('click', () => deleteSchedule(item.id));
        tbody.appendChild(tr);
    });
}

function renderMachineStores() {
    const tbody = document.getElementById('tbl-machine-stores');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    const list = state.schedules.filter(s => {
        if (!s.yearMonth) s.yearMonth = "2026-06";
        return s.type === 'machine' && s.yearMonth === ym;
    });
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center" style="color: var(--text-muted);">등록된 매장이 없습니다.</td></tr>`;
        return;
    }

    list.forEach(item => {
        const tr = document.createElement('tr');
        const isAllDone = item.installed && item.depositReceived && item.transferredToVendor;
        if (isAllDone) tr.className = 'row-completed';
        
        tr.innerHTML = `
            <td><strong>${item.store}</strong></td>
            <td>${item.date}</td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="installed" ${item.installed ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="depositReceived" ${item.depositReceived ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="transferredToVendor" ${item.transferredToVendor ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm btn-delete-sch" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelectorAll('input[type="checkbox"]').forEach(chk => {
            chk.addEventListener('change', (e) => {
                const field = e.target.getAttribute('data-field');
                updateScheduleItem(item.id, field, e.target.checked);
            });
        });

        tr.querySelector('.btn-delete-sch').addEventListener('click', () => deleteSchedule(item.id));
        tbody.appendChild(tr);
    });
}

function renderSamsungStores() {
    const tbody = document.getElementById('tbl-samsung-stores');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const ym = getYearMonthString();
    const list = state.schedules.filter(s => {
        if (!s.yearMonth) s.yearMonth = "2026-06";
        return s.type === 'samsung' && s.yearMonth === ym;
    });
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: var(--text-muted);">등록된 매장이 없습니다.</td></tr>`;
        return;
    }

    list.forEach(item => {
        const tr = document.createElement('tr');
        if (item.completed) tr.className = 'row-completed';
        
        tr.innerHTML = `
            <td><strong>${item.store}</strong></td>
            <td>${item.date}</td>
            <td class="text-center">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" data-field="completed" ${item.completed ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
            </td>
            <td class="text-center">
                <button class="btn-danger btn-sm btn-delete-sch" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        
        tr.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
            updateScheduleItem(item.id, 'completed', e.target.checked);
        });

        tr.querySelector('.btn-delete-sch').addEventListener('click', () => deleteSchedule(item.id));
        tbody.appendChild(tr);
    });
}

function updateScheduleItem(id, field, value) {
    const updated = state.schedules.map(item => {
        if (item.id === id) {
            return { ...item, [field]: value };
        }
        return item;
    });
    saveState('schedules', updated);
    renderSchedulesTab();
}

function deleteSchedule(id) {
    if (confirm("정말 이 일정을 삭제하시겠습니까?")) {
        const updated = state.schedules.filter(s => s.id !== id);
        saveState('schedules', updated);
        renderSchedulesTab();
    }
}

function renderYouthGrantList() {
    const container = document.getElementById('youth-grant-list');
    if (!container) return;
    container.innerHTML = '';
    
    const ym = getYearMonthString();
    const list = state.youthGrants.filter(g => {
        if (!g.yearMonth) g.yearMonth = "2026-06";
        return g.yearMonth === ym;
    });
    
    if (list.length === 0) {
        container.innerHTML = `<div style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 1rem;">현재 신청 직원이 없습니다.</div>`;
        return;
    }

    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'checklist-item flex-between';
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <label style="position: relative; cursor: pointer;">
                    <input type="checkbox" data-id="${item.id}" ${item.completed ? 'checked' : ''} style="display: none !important;">
                    <span class="checkbox-custom"></span>
                </label>
                <span class="checklist-text" style="font-weight: 600;">${item.employee}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">(${item.date} 급여 지급 후 신청)</span>
            </div>
            <button class="btn-danger btn-sm btn-delete-yg" data-id="${item.id}"><i class="fa-solid fa-xmark"></i></button>
        `;
        
        div.querySelector('input').addEventListener('change', (e) => {
            const updated = state.youthGrants.map(g => g.id === item.id ? { ...g, completed: e.target.checked } : g);
            saveState('youthGrants', updated);
        });

        div.querySelector('.btn-delete-yg').addEventListener('click', () => {
            if (confirm("이 장려금 신청 직원을 삭제하시겠습니까?")) {
                const updated = state.youthGrants.filter(g => g.id !== item.id);
                saveState('youthGrants', updated);
                renderSchedulesTab();
            }
        });

        container.appendChild(div);
    });
}

// ==========================================
// 10. 캘린더 컴포넌트 로직
// ==========================================

const calendarTitle = document.getElementById('calendar-title');
const calendarDays = document.getElementById('calendar-days');
const calPrev = document.getElementById('cal-prev');
const calNext = document.getElementById('cal-next');
const calToday = document.getElementById('cal-today');

const calModal = document.getElementById('calendar-modal');
const modalClose = document.getElementById('modal-close');
const btnModalCancel = document.getElementById('btn-modal-cancel');
const btnModalSave = document.getElementById('btn-modal-save');
const modalDateTitle = document.getElementById('modal-date-title');
const evtTitle = document.getElementById('evt-title');
const evtColor = document.getElementById('evt-color');
const modalExistingEvents = document.getElementById('modal-existing-events');

if (calPrev) {
    calPrev.addEventListener('click', () => {
        state.currentMonth--;
        if (state.currentMonth < 0) {
            state.currentMonth = 11;
            state.currentYear--;
        }
        handleYearMonthChange();
    });

    calNext.addEventListener('click', () => {
        state.currentMonth++;
        if (state.currentMonth > 11) {
            state.currentMonth = 0;
            state.currentYear++;
        }
        handleYearMonthChange();
    });

    calToday.addEventListener('click', () => {
        const today = new Date();
        state.currentYear = today.getFullYear();
        state.currentMonth = today.getMonth();
        handleYearMonthChange();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
    btnModalCancel.addEventListener('click', closeModal);
    btnModalSave.addEventListener('click', saveCalendarEvent);
}

function openModal(dateStr) {
    state.selectedDateStr = dateStr;
    modalDateTitle.innerText = `${dateStr} 일정 등록 및 관리`;
    evtTitle.value = '';
    renderModalExistingEvents();
    calModal.classList.add('active');
}

function closeModal() {
    calModal.classList.remove('active');
}

function renderModalExistingEvents() {
    modalExistingEvents.innerHTML = '';
    const dayEvents = state.calendarEvents.filter(e => e.date === state.selectedDateStr);
    
    if (dayEvents.length === 0) {
        modalExistingEvents.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">등록된 일정이 없습니다.</p>`;
        return;
    }

    dayEvents.forEach(evt => {
        const div = document.createElement('div');
        div.className = 'flex-between';
        div.style = 'background: #ffffff; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; margin-bottom: 4px; border: 1px solid var(--card-border);';
        div.innerHTML = `
            <span class="calendar-event-tag ${evt.color}">${evt.title}</span>
            <button class="btn-danger btn-sm" style="padding: 1px 6px; font-size: 0.65rem;" onclick="deleteCalendarEvent(${evt.id})">삭제</button>
        `;
        modalExistingEvents.appendChild(div);
    });
}

function saveCalendarEvent() {
    const title = evtTitle.value.trim();
    if (!title) {
        alert("일정 제목을 입력하세요.");
        return;
    }

    const newEvent = {
        id: Date.now(),
        title,
        date: state.selectedDateStr,
        color: evtColor.value
    };

    const updated = [...state.calendarEvents, newEvent];
    saveState('calendarEvents', updated);
    
    closeModal();
    renderCalendar();
}

window.deleteCalendarEvent = function(id) {
    if (confirm("이 일정을 삭제하시겠습니까?")) {
        const updated = state.calendarEvents.filter(e => e.id !== id);
        saveState('calendarEvents', updated);
        renderModalExistingEvents();
        renderCalendar();
    }
};

function renderCalendar() {
    if (!calendarDays) return;
    calendarDays.innerHTML = '';
    
    calendarTitle.innerText = `${state.currentYear}년 ${state.currentMonth + 1}월`;
    
    const daysLabel = ['일', '월', '화', '수', '목', '금', '토'];
    daysLabel.forEach(day => {
        const label = document.createElement('div');
        label.className = 'calendar-day-label';
        label.innerText = day;
        calendarDays.appendChild(label);
    });

    const firstDayIndex = new Date(state.currentYear, state.currentMonth, 1).getDay();
    const lastDate = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
    const prevLastDate = new Date(state.currentYear, state.currentMonth, 0).getDate();
    
    const today = new Date();
    
    for (let x = firstDayIndex; x > 0; x--) {
        const dateNum = prevLastDate - x + 1;
        const cell = document.createElement('div');
        cell.className = 'calendar-cell other-month';
        cell.innerHTML = `<span class="calendar-date-number">${dateNum}</span>`;
        calendarDays.appendChild(cell);
    }
    
    for (let i = 1; i <= lastDate; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell';
        
        if (i === today.getDate() && state.currentMonth === today.getMonth() && state.currentYear === today.getFullYear()) {
            cell.classList.add('today');
        }
        
        const yyyy = state.currentYear;
        const mm = String(state.currentMonth + 1).padStart(2, '0');
        const dd = String(i).padStart(2, '0');
        const cellDateStr = `${yyyy}-${mm}-${dd}`;
        
        cell.innerHTML = `
            <span class="calendar-date-number">${i}</span>
            <div class="calendar-events"></div>
        `;
        
        const eventsContainer = cell.querySelector('.calendar-events');
        const dayEvents = state.calendarEvents.filter(e => e.date === cellDateStr);
        
        dayEvents.forEach(evt => {
            const eventTag = document.createElement('span');
            eventTag.className = `calendar-event-tag ${evt.color}`;
            eventTag.innerText = evt.title;
            eventsContainer.appendChild(eventTag);
        });

        cell.addEventListener('click', () => {
            openModal(cellDateStr);
        });
        
        calendarDays.appendChild(cell);
    }
    
    const totalCells = calendarDays.children.length;
    const nextDaysCount = 49 - totalCells;
    for (let j = 1; j <= nextDaysCount; j++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell other-month';
        cell.innerHTML = `<span class="calendar-date-number">${j}</span>`;
        calendarDays.appendChild(cell);
    }
}

// ==========================================
// 10.1 전체 데이터 백업 및 복원 (Netlify -> 깃허브 등 이전용)
// ==========================================

function initBackupRestore() {
    const btnBackup = document.getElementById('btn-backup-data');
    const btnRestore = document.getElementById('btn-restore-data');
    const fileInput = document.getElementById('file-restore-input');

    if (btnBackup) {
        btnBackup.addEventListener('click', exportFullBackupJSON);
    }

    if (btnRestore && fileInput) {
        btnRestore.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', importFullBackupJSON);
    }
}

function exportFullBackupJSON() {
    const backupData = {
        version: "2.0",
        exportDate: new Date().toISOString(),
        checklist: state.checklist,
        transfers: state.transfers,
        recurring: state.recurring,
        privateVendors: state.privateVendors,
        schedules: state.schedules,
        youthGrants: state.youthGrants,
        calendarEvents: state.calendarEvents,
        blackboardMemo: localStorage.getItem('blackboardMemo') || ''
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const todayStr = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `카페프리헷_대시보드_백업데이터_${todayStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("전체 데이터 백업 파일이 다운로드되었습니다!");
}

function importFullBackupJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const data = JSON.parse(evt.target.result);
            if (!data || typeof data !== 'object') {
                alert("유효한 백업 파일이 아닙니다.");
                return;
            }

            if (confirm("백업 파일의 데이터로 대시보드를 복원하시겠습니까? 기존 데이터는 덮어씌워집니다.")) {
                if (data.checklist) saveState('checklist', data.checklist);
                if (data.transfers) saveState('transfers', data.transfers);
                if (data.recurring) saveState('recurring', data.recurring);
                if (data.privateVendors) saveState('privateVendors', data.privateVendors);
                if (data.schedules) saveState('schedules', data.schedules);
                if (data.youthGrants) saveState('youthGrants', data.youthGrants);
                if (data.calendarEvents) saveState('calendarEvents', data.calendarEvents);
                if (data.blackboardMemo !== undefined) {
                    localStorage.setItem('blackboardMemo', data.blackboardMemo);
                    const memoEl = document.getElementById('blackboard-memo');
                    if (memoEl) memoEl.value = data.blackboardMemo;
                }

                showToast("데이터 복원이 성공적으로 완료되었습니다!");
                setTimeout(() => {
                    location.reload();
                }, 800);
            }
        } catch (err) {
            alert("파일을 읽는 중 오류가 발생했습니다: " + err.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ==========================================
// 11. 앱 초기화 로드
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initYearMonthControls();
    checkAndCreateMonthlyRecurring();
    initBackupRestore();
    
    // 테이블 헤더 클릭 정렬 이벤트 바인딩 호출
    initHeaderSortEvents();
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const tabId = e.currentTarget.getAttribute('data-tab');
            if (tabId === 'tab-private-vendors') {
                renderPrivateVendorsTable();
            } else if (tabId === 'tab-transfers') {
                // 이체 탭 활성화 시마다 헤더 클릭 리스너 재검사
                initHeaderSortEvents();
                initBlackboardMemo();
            }
        });
    });

    renderOverviewTab();
});
