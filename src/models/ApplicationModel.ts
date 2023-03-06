import { compact } from "lodash";

export class ApplicationModel {
  enterprise?: string;
  manager?: string;
  position?: string;
  email?: string;
  phone?: string;
  referenceUrl?: string;
  questions?: string;
  budget?: string;

  toString() {
    const array = compact([
      this.enterprise ? `기업명: ${this.enterprise}` : null,
      this.manager ? `담당자명: ${this.manager}` : null,
      this.position ? `직책: ${this.position}` : null,
      this.email ? `이메일: ${this.email}` : null,
      this.phone ? `휴대폰: ${this.phone}` : null,
      this.referenceUrl ? `레퍼런스URL: ${this.referenceUrl}` : null,
      this.budget ? `예산: ${this.budget}` : null,
      this.questions ? `문의사항: ${this.questions}` : null,
    ]);
    return array.join("\n");
  }
}
