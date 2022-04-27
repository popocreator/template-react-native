const server = 'http://evolution/popomon.club';

interface Action {}
interface Card {}

// 카드 불러오기
export function getCard(action: Action, card: Card) {}
export function getCardList(action: Action) {}

// 카드 추가
export function addCard(action: Action, card: Card) {}
export function addCardList(action: Action, cardList: Card[]) {}

// 카드 제거
export function removeCard(action: Action, card: Card) {}
export function removeCardList(action: Action, cardList: Card[]) {}

// 카드 수정
export function saveCard(action: Action, card: Card) {}
export function saveCardList(action: Action, cardList: Card[]) {}
