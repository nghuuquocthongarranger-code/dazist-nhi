export const birthInfo = {
  date: "13/06/2001",
  time: "15:10 (giờ địa phương, GMT+7)",
  place: "Hồ Chí Minh, Việt Nam (106°43' Đông, 10°46' Bắc)",
  universalTime: "08:10 UT",
  houseSystem: "Placidus",
  zodiac: "Tropical (Nhiệt đới)",
};

export interface NatalPlanet {
  symbol: string;
  name: string;
  sign: string;
  degree: string;
  house: string;
  retrograde?: boolean;
}

export const natalPlanets: NatalPlanet[] = [
  { symbol: "☉", name: "Mặt Trời", sign: "Song Tử", degree: "22°22'", house: "Nhà 8" },
  { symbol: "☽", name: "Mặt Trăng", sign: "Song Ngư", degree: "13°30'", house: "Nhà 5" },
  { symbol: "☿", name: "Thủy Tinh", sign: "Song Tử", degree: "27°14'", house: "Nhà 8", retrograde: true },
  { symbol: "♀", name: "Kim Tinh", sign: "Kim Ngưu", degree: "6°41'", house: "Nhà 6" },
  { symbol: "♂", name: "Sao Hỏa", sign: "Nhân Mã", degree: "22°53'", house: "Nhà 2", retrograde: true },
  { symbol: "♃", name: "Sao Mộc", sign: "Song Tử", degree: "23°14'", house: "Nhà 8" },
  { symbol: "♄", name: "Thổ Tinh", sign: "Song Tử", degree: "6°46'", house: "Nhà 7" },
  { symbol: "♅", name: "Thiên Vương Tinh", sign: "Bảo Bình", degree: "24°45'", house: "Nhà 4", retrograde: true },
  { symbol: "♆", name: "Hải Vương Tinh", sign: "Bảo Bình", degree: "8°29'", house: "Nhà 4", retrograde: true },
  { symbol: "♇", name: "Diêm Vương Tinh", sign: "Nhân Mã", degree: "13°41'", house: "Nhà 2", retrograde: true },
  { symbol: "⚷", name: "Chiron", sign: "Nhân Mã", degree: "26°6'", house: "Nhà 2", retrograde: true },
  { symbol: "☊", name: "Nút Bắc (thực)", sign: "Cự Giải", degree: "6°26'", house: "Nhà 8" },
];

export interface NatalAngle {
  symbol: string;
  name: string;
  sign: string;
  degree: string;
}

export const natalAngles: NatalAngle[] = [
  { symbol: "AC", name: "Cung Mọc (Ascendant)", sign: "Bọ Cạp", degree: "10°26'" },
  { symbol: "MC", name: "Thiên Đỉnh (Midheaven)", sign: "Sư Tử", degree: "8°30'" },
  { symbol: "DC", name: "Điểm Hạ Huyệt (đối AC)", sign: "Kim Ngưu", degree: "10°26'" },
  { symbol: "IC", name: "Đáy Trời (đối MC)", sign: "Bảo Bình", degree: "8°30'" },
];

export const natalHouseCusps = [
  { house: "Nhà 2", sign: "Nhân Mã", degree: "9°40'" },
  { house: "Nhà 3", sign: "Ma Kết", degree: "8°36'" },
  { house: "Nhà 11", sign: "Xử Nữ", degree: "9°53'" },
  { house: "Nhà 12", sign: "Thiên Bình", degree: "11°16'" },
];

export interface SensitivePoint {
  title: string;
  desc: string;
}

export const sensitivePoints: SensitivePoint[] = [
  {
    title: "Chùm sao hội tụ (stellium) tại Song Tử — Nhà 7/8",
    desc: "Bốn hành tinh cùng đóng ở Song Tử: Mặt Trời (22°22'), Thủy Tinh (27°14', nghịch hành), Sao Mộc (23°14') và Thổ Tinh (6°46') — một cụm sao dày đặc hiếm gặp, khiến bản chất Song Tử (linh hoạt, ham học hỏi, đa năng, giỏi giao tiếp) trở thành nét tính cách áp đảo, chi phối gần như toàn bộ lá số.",
  },
  {
    title: "Cụm đối trục tại Nhân Mã — Sao Hỏa hợp Diêm Vương hợp Chiron",
    desc: "Sao Hỏa (22°53'), Diêm Vương (13°41') và Chiron (26°6') đều nằm ở Nhân Mã (Nhà 2) — đối diện trực tiếp với cụm Song Tử phía trên, tạo thành trục căng thẳng Song Tử – Nhân Mã rất rõ nét: một bên là tri thức/giao tiếp linh hoạt, một bên là khát vọng/niềm tin mãnh liệt cần được thể hiện và đôi khi đấu tranh để bảo vệ.",
  },
  {
    title: "Cung Mọc tại Bọ Cạp — vẻ ngoài sâu sắc, đối lập với năng lượng Song Tử bên trong",
    desc: "Ascendant tại Bọ Cạp (10°26') mang lại ấn tượng đầu tiên bí ẩn, sâu sắc, có phần dè dặt/thăm dò trước người lạ — tương phản thú vị với chùm sao Song Tử sôi nổi, cởi mở bên trong; người xung quanh thường cần thời gian mới thấy được sự linh hoạt, hài hước thực sự ẩn sau vẻ ngoài trầm tĩnh này.",
  },
  {
    title: "Solar Return hằng năm kích hoạt lại chùm sao Song Tử",
    desc: "Mặt Trời (22°22' Song Tử) — mỗi năm vào khoảng 13-14 tháng 6 dương lịch, Mặt Trời transit quay về đúng vị trí này (Solar Return), kích hoạt lại toàn bộ chùm sao Song Tử gốc, đặc biệt là cụm đối trục với Nhân Mã ở trên.",
  },
];
