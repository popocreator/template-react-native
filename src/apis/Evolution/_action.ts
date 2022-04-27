const server = 'http://evolution/popomon.club';

interface Action {}

// 액션 불러오기
export function getAction(action: Action) {}
export function getActionList() {}

// 액션 추가
export function addAction(action: Action) {}
export function addActionList(actionList: Action[]) {}

// 액선 제거
export function removeAction(action: Action) {}
export function removeActionList(actionList: Action[]) {}

// 액션 수정
export function saveAction(action: Action) {}
export function saveActionList(actionList: Action[]) {}
