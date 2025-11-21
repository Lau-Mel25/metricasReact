export class HistoryService {
  constructor() {
    this.items = [];
  }

  add(entry) {
    this.items.push(entry);
  }

  all() {
    return [...this.items];
  }
}

export const historyService = new HistoryService();
