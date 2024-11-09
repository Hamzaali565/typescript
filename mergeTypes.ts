type card = {
  accNo: number;
};

type bankName = {
  bankName: string;
};

type completeDetails = bankName & card & { cardUser: string };
