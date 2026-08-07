// Lá số Tử Vi — chuyển thể từ lá số gốc (an theo http://www.phongthuymenhly.com)
// Đương số: Trịnh Hoàng Nhi — Âm Nữ — (ÂL) 22/4/2001, giờ Mậu Thân — Hỏa Lục Cục — Mệnh: Bạch Lạp Kim.

export type TruongSinhStage =
  | "Trường Sinh"
  | "Mộc Dục"
  | "Quan Đới"
  | "Lâm Quan"
  | "Đế Vượng"
  | "Suy"
  | "Bệnh"
  | "Tử"
  | "Mộ"
  | "Tuyệt"
  | "Thai"
  | "Dưỡng";

export type SaoTrangThai = "Miếu" | "Vượng" | "Đắc" | "Hãm" | "Bình";

export const TRUONG_SINH_TONE: Record<TruongSinhStage, "tot" | "trung-binh" | "xau"> = {
  "Trường Sinh": "tot",
  "Đế Vượng": "tot",
  "Lâm Quan": "tot",
  "Quan Đới": "tot",
  "Mộc Dục": "trung-binh",
  Dưỡng: "trung-binh",
  Thai: "trung-binh",
  Suy: "xau",
  Bệnh: "xau",
  Tử: "xau",
  Mộ: "xau",
  Tuyệt: "xau",
};

export interface TuViStar {
  name: string;
  state?: SaoTrangThai;
}

export interface TuViPalace {
  chi: string;
  cungName: string;
  ageRange: [number, number];
  mainStars: TuViStar[];
  auxStars: string[];
  luuStars: string[];
  trietTuan?: "Triệt" | "Tuần";
  truongSinh: TruongSinhStage;
  isThan?: boolean;
  summary: string;
}

export const tuViInfo = {
  name: "Trịnh Hoàng Nhi",
  gender: "Âm Nữ",
  birthLunar: "(ÂL) 22/4/2001, giờ Mậu Thân",
  birthYear: 2001,
  cuc: "Hỏa Lục Cục",
  menhChu: "Bạch Lạp Kim",
  luuNienYear: 2026,
  source: "phongthuymenhly.com",
};

export const tuViPalaces: TuViPalace[] = [
  {
    chi: "Dậu",
    cungName: "Mệnh",
    ageRange: [6, 15],
    mainStars: [{ name: "Thiên Phủ", state: "Bình" }],
    auxStars: ["Lộc Tồn", "Bác Sỹ", "Tướng Tinh", "Long Trì", "Thiên Quan", "Quan Phủ", "Phá Toái", "Tiết Độ"],
    luuStars: ["Hồng Loan", "Tức Thần", "Thiên Việt"],
    trietTuan: "Tuần",
    truongSinh: "Suy",
    summary:
      "Thiên Phủ ở thế Bình thủ Mệnh — tính cách điềm đạm, biết lo xa, có xu hướng thận trọng và ưa sự ổn định hơn mạo hiểm. Có Lộc Tồn đồng cung nên nhìn chung cuộc sống không thiếu thốn, nhưng gặp Tuần nên những thành quả đầu đời thường đến chậm, cần kiên nhẫn tích lũy dần thay vì mong bứt phá nhanh.",
  },
  {
    chi: "Tuất",
    cungName: "Phụ Mẫu",
    ageRange: [16, 25],
    mainStars: [{ name: "Thái Âm", state: "Miếu" }],
    auxStars: ["Lực Sỹ", "Nguyệt Đức", "Nguyệt Giải", "Địa Giải", "Ân Quang", "Kình Dương", "Phong Cáo", "Hồng Loan"],
    luuStars: ["Quan Phủ", "Hoa Cái"],
    truongSinh: "Dưỡng",
    summary:
      "Thái Âm miếu địa tại Phụ Mẫu — cha mẹ (đặc biệt hình ảnh mẹ) hiền hòa, chu đáo, tinh tế và là chỗ dựa tinh thần vững chắc. Quan hệ với bậc trên nhìn chung êm ấm, tuy có Kình Dương nên đôi lúc vẫn có va chạm quan điểm nhỏ cần dung hòa.",
  },
  {
    chi: "Hợi",
    cungName: "Phúc Đức",
    ageRange: [26, 35],
    mainStars: [
      { name: "Liêm Trinh", state: "Hãm" },
      { name: "Tham Lang", state: "Hãm" },
    ],
    auxStars: ["Thanh Long", "Thiên Giải", "Thiên Vu", "Thiên Hư", "Thiên Khôi"],
    luuStars: ["Kiếp Sát", "Long Đức"],
    truongSinh: "Lâm Quan",
    summary:
      "Liêm Tham đồng hãm tại Phúc Đức — đời sống tinh thần/nội tâm giai đoạn này (25–34 tuổi) dễ có phần trăn trở, tham vọng nhiều nhưng chưa dễ thỏa mãn ngay; cần chủ động tìm về những giá trị tinh thần bền vững thay vì chạy theo ham muốn nhất thời để giữ được sự an yên.",
  },
  {
    chi: "Tý",
    cungName: "Điền Trạch",
    ageRange: [36, 45],
    mainStars: [{ name: "Cự Môn", state: "Vượng" }],
    auxStars: ["Long Đức", "Văn Khúc", "Hoá Lộc", "Hoá Khoa", "Tiểu Hao", "Tức Thần", "Thiên Hình"],
    luuStars: ["Thiên Sát", "Tai Sát"],
    truongSinh: "Quan Đới",
    summary:
      "Cự Môn vượng tại Điền Trạch, có Hoá Lộc/Hoá Khoa đồng cung — chuyện nhà cửa, bất động sản có thể trải qua đôi lần bàn tính/thương lượng kỹ lưỡng (đúng bản chất Cự Môn) trước khi ổn định, nhưng khi đã an cư thì khá vững vàng và có giá trị tăng theo thời gian.",
  },
  {
    chi: "Sửu",
    cungName: "Quan Lộc",
    ageRange: [46, 55],
    mainStars: [{ name: "Thiên Tướng", state: "Đắc" }],
    auxStars: ["Hoa Cái", "Tướng Quân", "Bạch Hổ", "Thiên Khốc"],
    luuStars: ["Thiên Sát", "Long Đức"],
    truongSinh: "Mộc Dục",
    isThan: true,
    summary:
      "Cung Thân đóng tại Quan Lộc, Thiên Tướng đắc địa — trọng tâm cả đời nghiêng hẳn về sự nghiệp, công danh; là người có tinh thần trách nhiệm cao, làm việc có nguyên tắc, phù hợp vai trò tham mưu/quản lý đáng tin cậy. Giai đoạn 46–55 tuổi thường là lúc sự nghiệp đạt độ chín và ổn định nhất.",
  },
  {
    chi: "Dần",
    cungName: "Nô Bộc",
    ageRange: [56, 65],
    mainStars: [
      { name: "Thiên Đồng", state: "Miếu" },
      { name: "Thiên Lương", state: "Vượng" },
    ],
    auxStars: ["Tấu Thư", "Thai Phù", "Phúc Đức", "Thiên Đức", "Nguyệt Đức", "Kiếp Sát", "Hoa Cái"],
    luuStars: ["Bạch Hổ", "Chỉ Bối", "Thiên Khôi", "Tử Phù"],
    truongSinh: "Trường Sinh",
    summary:
      "Đồng Lương miếu vượng tại Nô Bộc — bạn bè, cộng sự, nhân viên xung quanh thường hiền hòa, biết chăm lo và giúp đỡ lẫn nhau chân thành; các mối quan hệ hợp tác trong giai đoạn này (56–65 tuổi) mang lại cảm giác ấm áp, tin cậy hơn là toan tính.",
  },
  {
    chi: "Mão",
    cungName: "Thiên Di",
    ageRange: [66, 75],
    mainStars: [
      { name: "Vũ Khúc", state: "Đắc" },
      { name: "Thất Sát", state: "Hãm" },
    ],
    auxStars: ["Phi Liêm", "Địa Không", "Điếu Khách", "Thiên Diêu", "Tai Sát", "Lưu Hà"],
    luuStars: ["Thiên Hỷ", "Hàm Trì", "Phúc Đức"],
    truongSinh: "Dưỡng",
    summary:
      "Vũ Sát tại Thiên Di — ra ngoài/thay đổi môi trường trong giai đoạn này thường mang tính quyết đoán, dứt khoát (đúng chất Vũ Khúc) nhưng Thất Sát hãm nên đi xa dễ gặp trắc trở/biến động bất ngờ hơn là suôn sẻ — nên cân nhắc kỹ trước các quyết định di chuyển lớn.",
  },
  {
    chi: "Thìn",
    cungName: "Tật Ách",
    ageRange: [76, 85],
    mainStars: [{ name: "Thái Dương", state: "Vượng" }],
    auxStars: ["Hỷ Thần", "Thiên Hỷ", "Thiên Y", "Tam Thai", "Thiên Quý", "Trực Phù", "Thiên Sát", "Quả Tú", "Thiên Diêu", "Thiên La"],
    luuStars: ["Điếu Khách", "Nguyệt Sát", "Đà La"],
    trietTuan: "Triệt",
    truongSinh: "Thai",
    summary:
      "Thái Dương vượng tại Tật Ách — nhìn chung sức khoẻ thể trạng khá tốt, nhưng gặp Triệt nên cần lưu ý các vấn đề liên quan tim mạch/mắt/huyết áp, khám sức khỏe định kỳ để phòng ngừa hơn là chủ quan vào nền tảng vốn có.",
  },
  {
    chi: "Tỵ",
    cungName: "Tài Bạch",
    ageRange: [86, 95],
    mainStars: [],
    auxStars: ["Phượng Các", "Giải Thần", "Quốc Ấn", "Thiên Phúc", "Bệnh Phù", "Thái Tuế", "Chỉ Bối"],
    luuStars: ["Trực Phù", "Vong Thần", "Lộc Tồn"],
    trietTuan: "Triệt",
    truongSinh: "Tuyệt",
    summary:
      "Vô chính diệu tại Tài Bạch, lại gặp Triệt — tài chính giai đoạn này phần nhiều phụ thuộc vào cung Mệnh đối chiếu và cần sự thận trọng chủ động hơn là trông chờ vận may; Lộc Tồn lưu là điểm tựa giúp duy trì được sự ổn định căn bản.",
  },
  {
    chi: "Ngọ",
    cungName: "Tử Tức",
    ageRange: [96, 105],
    mainStars: [{ name: "Thiên Cơ", state: "Đắc" }],
    auxStars: ["Thiên Khôi", "Đại Hao", "Thiếu Dương", "Hối Khí", "Thiên Thọ", "Hàm Trì", "Thiên Trù", "Linh Tinh"],
    luuStars: ["Kình Dương", "Thái Tuế", "Tướng Tinh"],
    truongSinh: "Mộ",
    summary:
      "Thiên Cơ đắc địa tại Tử Tức — quan hệ với con cái/thế hệ sau linh hoạt, cởi mở, nhiều biến chuyển theo hướng tích cực; con cái (nếu có trong giai đoạn tương ứng) thường thông minh, nhanh nhạy.",
  },
  {
    chi: "Mùi",
    cungName: "Phu Thê",
    ageRange: [106, 115],
    mainStars: [
      { name: "Tử Vi", state: "Đắc" },
      { name: "Phá Quân", state: "Vượng" },
    ],
    auxStars: ["Tả Phù", "Hữu Bật", "Phục Binh", "Tang Môn", "Linh Tinh"],
    luuStars: ["Hối Khí"],
    truongSinh: "Tử",
    summary:
      "Tử Phá tại Phu Thê — bạn đời có cá tính mạnh, chủ kiến rõ ràng, thậm chí có phần cứng cỏi/độc lập; hôn nhân cần cả hai cùng nhường nhịn, tôn trọng không gian riêng của nhau. Có Tả Phù, Hữu Bật đồng cung là điểm tựa giúp mối quan hệ thêm phần vững vàng.",
  },
  {
    chi: "Thân",
    cungName: "Huynh Đệ",
    ageRange: [116, 125],
    mainStars: [],
    auxStars: ["Thiếu Âm", "Quan Phủ", "Đà La", "Vong Thần", "Cô Thần", "Âm Sát"],
    luuStars: ["Tuế Dịch", "Tang Môn", "Thiên Mã"],
    trietTuan: "Tuần",
    truongSinh: "Bệnh",
    summary:
      "Vô chính diệu tại Huynh Đệ, gặp Tuần — quan hệ anh chị em có phần mờ nhạt hoặc mỗi người một hướng đi riêng khá sớm, cần chủ động hơn trong việc giữ liên lạc, gắn kết theo thời gian.",
  },
];

export function currentPalace(age: number): TuViPalace | undefined {
  return tuViPalaces.find((p) => age >= p.ageRange[0] && age <= p.ageRange[1]);
}

export function palaceForChi(chi: string): TuViPalace | undefined {
  return tuViPalaces.find((p) => p.chi === chi);
}
