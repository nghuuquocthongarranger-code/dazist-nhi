import {
  computeNumerologyProfile,
  computeNumberGrid,
  computeArrows,
  computePinnacles,
  computeChallenges,
  computePersonalCycle,
} from "../lib/numerology";
import { personalInfo } from "./baziProfile";

export const [birthDay, birthMonth, birthYear] = personalInfo.birthDate.split(" ")[0].split("/").map(Number);

export const numerologyProfile = computeNumerologyProfile(personalInfo.name, birthDay, birthMonth, birthYear);
export const numberGrid = computeNumberGrid(birthDay, birthMonth, birthYear);
export const arrows = computeArrows(numberGrid);
export const pinnacles = computePinnacles(birthDay, birthMonth, birthYear);
export const challenges = computeChallenges(birthDay, birthMonth, birthYear);
export const currentPersonalCycle = computePersonalCycle(birthDay, birthMonth, new Date());

export const numerologyMeaning: Record<string, { headline: string; paragraphs: string[] }> = {
  lifePath: {
    headline: "Số Chủ Đạo 4 (Nợ Nghiệp Quả 13/4) — Bài học kỷ luật cần trả gấp",
    paragraphs: [
      "Số Chủ Đạo (Life Path) là con số quan trọng nhất trong thần số học, mô tả bài học lớn và hướng đi xuyên suốt cuộc đời. Số 4 gắn với nền tảng, trật tự, kỷ luật và tinh thần làm việc bền bỉ — tiến bộ chậm mà chắc, xây dựng mọi thứ trên nền móng vững chắc thay vì đi đường tắt.",
      "Đi kèm là Nợ Nghiệp Quả 13/4 — dấu hiệu cho thấy bài học kỷ luật/trách nhiệm này từng bị trốn tránh và nay cần \"trả lại\" gấp nhiều lần hơn qua việc thật sự làm việc chăm chỉ, có tổ chức. Nếu lười biếng hoặc tìm đường tắt, trở ngại có xu hướng lặp đi lặp lại cho đến khi bài học được học trọn vẹn — nhưng một khi đã kiên trì đủ lâu, thành quả đạt được thường rất bền vững.",
    ],
  },
  expression: {
    headline: "Số Sứ Mệnh 1 — Thể hiện ra ngoài bằng tinh thần tiên phong",
    paragraphs: [
      "Số Sứ Mệnh (Expression/Destiny) — suy ra từ toàn bộ họ tên — cho biết tài năng và cách bạn thể hiện bản thân ra thế giới bên ngoài. Số 1 tương phản thú vị với nền tảng thận trọng của Số Chủ Đạo 4: ra ngoài lại thể hiện như một người chủ động, thích dẫn đầu, không ngại đứng ra khởi xướng điều mới.",
      "Tài năng thiên về lãnh đạo, khởi nghiệp, hoặc bất kỳ vai trò nào cần người tiên phong mở đường — miễn là đi cùng với sự kiên trì của số 4 để không bỏ dở giữa chừng.",
    ],
  },
  soulUrge: {
    headline: "Số Linh Hồn 7 — Khao khát tri thức và không gian riêng",
    paragraphs: [
      "Số Linh Hồn (Soul Urge) — suy từ các nguyên âm trong tên — phản ánh động lực sâu bên trong, điều bạn thực sự khao khát dù không luôn thể hiện ra ngoài. Số 7 khao khát sự hiểu biết, chân lý, những câu trả lời sâu sắc hơn bề mặt — cần nhiều thời gian một mình để suy ngẫm, dễ cảm thấy ngột ngạt nếu môi trường xung quanh quá ồn ào hoặc hời hợt.",
      "Đây cũng là mảnh ghép khá kín đáo, ít khi bộc lộ hết ra ngoài — người xung quanh thường chỉ thấy phần năng động, tiên phong (Sứ Mệnh 1) mà không dễ nhận ra chiều sâu nội tâm này.",
    ],
  },
  personality: {
    headline: "Số Nhân Cách 3 — Vẻ ngoài vui vẻ, cuốn hút, giàu biểu cảm",
    paragraphs: [
      "Số Nhân Cách (Personality) — suy từ các phụ âm trong tên — là ấn tượng đầu tiên người khác cảm nhận về bạn. Số 3 cho ấn tượng ban đầu vui vẻ, hoạt ngôn, có khiếu hài hước hoặc nghệ thuật, tạo cảm giác dễ gần và ấm áp ngay từ lần gặp đầu tiên.",
      "Vẻ ngoài sôi nổi này là lớp phủ khá khác so với chiều sâu trầm lắng của Số Linh Hồn 7 — người mới quen thường cần thời gian mới nhận ra bên dưới sự vui vẻ còn có một nội tâm thích suy ngẫm, cần không gian riêng.",
    ],
  },
  birthday: {
    headline: "Số Ngày Sinh 4 (sinh ngày 13) — Tài lẻ kỷ luật, làm việc có phương pháp",
    paragraphs: [
      "Số Ngày Sinh là tài năng bổ trợ, đến từ đúng ngày chào đời (ngày 13, rút gọn còn 4). Trùng với Số Chủ Đạo, con số này càng nhấn mạnh thêm bài học nền tảng/kỷ luật — vì sinh đúng ngày mang Nợ Nghiệp Quả 13, tài năng bổ trợ này cần được rèn giũa nghiêm túc, không nên xem nhẹ, mới thật sự phát huy hết tiềm năng.",
    ],
  },
  maturity: {
    headline: "Số Trưởng Thành 5 — Giai đoạn sau hướng về tự do, trải nghiệm",
    paragraphs: [
      "Số Trưởng Thành (Maturity) — tổng của Số Chủ Đạo và Số Sứ Mệnh — mô tả xu hướng chuyển dịch dần theo thời gian, thường rõ nét hơn từ độ tuổi trung niên trở đi. Số 5 hướng về sự tự do, thay đổi, ham trải nghiệm cái mới — cho thấy nền tảng kỷ luật gây dựng ở giai đoạn đầu đời (số 4) sẽ dần mở ra thành một cuộc sống cởi mở, linh hoạt và sẵn sàng thay đổi hướng đi hơn khi về sau, miễn là gốc rễ kỷ luật đã đủ vững.",
    ],
  },
  attitude: {
    headline: "Số Thái Độ 1 — Ấn tượng ban đầu: chủ động, độc lập",
    paragraphs: [
      "Số Thái Độ (Attitude) — từ ngày và tháng sinh — là cách bạn tiếp cận thế giới trong những khoảnh khắc đầu tiên, phản xạ tự nhiên trước một tình huống mới. Số 1 cho thấy phản xạ ban đầu là chủ động, độc lập, thích tự mình xử lý vấn đề — đôi khi có thể bị hiểu là hơi cứng đầu hoặc ngại nhờ giúp đỡ.",
    ],
  },
};

export const numerologyIntro =
  "Thần số học Pythagoras quy đổi họ tên (bỏ dấu) và ngày sinh Dương lịch thành các con số mang ý nghĩa biểu tượng. Đây là góc nhìn thứ ba, độc lập với Bát Tự và Chiêm tinh học Tây phương, dùng để đối chiếu chéo và bổ sung chiều sâu cho các nhận định cá nhân.";
