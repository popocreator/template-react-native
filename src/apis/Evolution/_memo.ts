const server = 'http://evolution/popomon.club';

interface Memo {}

// 회고 불러오기
export function getMemo(memo: Memo) {}
export function getMemoList() {}

// 회고 추가
export function addMemo(memo: Memo) {}
export function addMemoList(memoList: Memo[]) {}

// 액선 제거
export function removeMemo(memo: Memo) {}
export function removeMemoList(memoList: Memo[]) {}

// 회고 수정
export function saveMemo(memo: Memo) {}
export function saveMemoList(memoList: Memo[]) {}
