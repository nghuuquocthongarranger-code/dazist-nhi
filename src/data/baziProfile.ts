export interface PillarData {
  position: "Năm" | "Tháng" | "Ngày" | "Giờ";
  can: string;
  canNote: string;
  chi: string;
  tangCan: { can: string; tenGod: string }[];
  canTenGod: string;
}

export const personalInfo = {
  name: "Trịnh Hoàng Nhi",
  birthDate: "13/06/2001 (Dương lịch)",
  gender: "Nữ mệnh",
  napAm: "Bạch Lạp Kim (白蠟金)",
  napAmDesc: [
    "Đây là một trong 30 Nạp Âm Ngũ Hành của hệ Lục Thập Hoa Giáp, ứng với cặp năm Canh Thìn – Tân Tỵ (năm sinh Tân Tỵ của bạn).",
    "Khác với Ngũ Hành của Nhật Chủ (Đinh Hỏa — dùng để luận toàn bộ Bát Tự), Nạp Âm là ngũ hành tính riêng theo trụ Năm, thường dùng để xem tuổi hợp/khắc, chọn ngày cưới hỏi, phong thủy nhà cửa.",
    "Bạch Lạp Kim mang hình ảnh kim loại còn ở dạng thô mềm (như sáp nến), chưa được tôi luyện thành khí cụ — biểu trưng cho tiềm năng cần thời gian mài giũa, tính cách linh hoạt, thích nghi tốt nhưng cần \"lửa\" (thử thách, rèn luyện) để trở nên sắc bén và vững vàng hơn.",
  ],
};

export const fourPillars: PillarData[] = [
  {
    position: "Năm",
    can: "Tân",
    canNote: "Âm Kim",
    chi: "Tỵ",
    canTenGod: "Thiên Tài",
    tangCan: [
      { can: "Bính", tenGod: "Kiếp Tài" },
      { can: "Mậu", tenGod: "Thương Quan" },
      { can: "Canh", tenGod: "Chính Tài" },
    ],
  },
  {
    position: "Tháng",
    can: "Giáp",
    canNote: "Dương Mộc",
    chi: "Ngọ",
    canTenGod: "Chính Ấn",
    tangCan: [
      { can: "Đinh", tenGod: "Tỷ Kiên" },
      { can: "Kỷ", tenGod: "Thực Thần" },
    ],
  },
  {
    position: "Ngày",
    can: "Đinh",
    canNote: "Âm Hỏa",
    chi: "Mùi",
    canTenGod: "Nhật Chủ",
    tangCan: [
      { can: "Kỷ", tenGod: "Thực Thần" },
      { can: "Đinh", tenGod: "Tỷ Kiên" },
      { can: "Ất", tenGod: "Thiên Ấn" },
    ],
  },
  {
    position: "Giờ",
    can: "Mậu",
    canNote: "Dương Thổ",
    chi: "Thân",
    canTenGod: "Thương Quan",
    tangCan: [
      { can: "Canh", tenGod: "Chính Tài" },
      { can: "Nhâm", tenGod: "Chính Quan" },
      { can: "Mậu", tenGod: "Thương Quan" },
    ],
  },
];

export const nhatChu = { can: "Đinh", note: "Âm Hỏa" };

export const tenGodRatios = [
  { name: "Thương Quan", percent: 20 },
  { name: "Tỉ Kiên", percent: 14.3 },
  { name: "Chính Ấn", percent: 14.3 },
  { name: "Thiên Tài", percent: 14.3 },
  { name: "Thực Thần", percent: 12.9 },
  { name: "Chính Tài", percent: 10 },
  { name: "Kiếp Tài", percent: 8.6 },
  { name: "Chính Quan", percent: 4.3 },
  { name: "Thiên Ấn", percent: 1.4 },
  { name: "Thất Sát", percent: 0 },
];

export const bodyStrength = {
  verdict: "THÂN VƯỢNG",
  cachCuc: "Kiến Lộc",
  paragraphs: [
    "Nhật Chủ Đinh (Hỏa) sinh vào tháng Ngọ — đúng vị trí Đế Vượng/Lộc của Hỏa trong vòng Trường Sinh — nên gọi là \"đắc lệnh\", yếu tố quan trọng nhất khi định Vượng/Nhược theo cổ pháp Tử Bình. Cách cục Kiến Lộc (do chính hệ thống lập lá số xác nhận): tàng can chính khí của Chi Tháng (Ngọ) là Đinh, trùng Tỷ Kiên với Nhật Chủ. Cộng thêm Chi Ngày (Mùi) cũng tàng Đinh (đắc địa) và Giáp Mộc thấu can ở Tháng sinh trợ thêm, Nhật Chủ vững gốc ngay tại nơi quan trọng nhất của lá số.",
    "Lưu ý minh bạch: nếu chỉ đếm đơn thuần theo tỉ trọng Thiên Can + Tàng Can (không tính trọng số theo mùa), phe sinh/trợ Nhật Chủ (Tỷ Kiếp + Ấn) chỉ chiếm ~38.6%, thấp hơn phe tiết/hao/khắc (Thực-Thương-Tài-Quan Sát, ~61.4%) — nhìn thoáng qua con số này dễ gây hiểu lầm là Thân Nhược. Nhưng theo đúng nguyên tắc cổ điển, \"đắc lệnh\" (sinh đúng tháng Lộc/Đế Vượng) được coi trọng hơn hẳn phép đếm khí đơn thuần — bản thân việc lá số hình thành đúng Cách Cục Kiến Lộc (một cách cục chỉ xuất hiện khi Nhật Chủ đủ vững tại tháng sinh) là bằng chứng độc lập củng cố thêm cho kết luận Thân Vượng, không phải một lựa chọn tùy tiện.",
    "Điểm khác biệt so với một Thân cực vượng thuần túy: bên cạnh phe Tỷ/Kiếp/Ấn, lá số còn có Thực Thần – Thương Quan (Thổ, ~32.9% — nhóm lớn nhất lá số) và Tài tinh (Kim, ~24.3%) khá dồi dào — tạo thành một dòng chảy \"sinh – tiết – sinh\" rất mạch lạc (Hỏa sinh Thổ, Thổ sinh Kim, Kim sinh Thủy). Đây là lá số Thân vượng có lối thoát tốt, miễn là biết tận dụng đúng hướng Thực-Thương-Tài thay vì chỉ dựa vào bản năng (Tỷ Kiếp) hay được bao bọc (Ấn).",
  ],
};

export const dungHyKy = [
  {
    role: "dung-than" as const,
    colorElement: "tho" as const,
    title: "Dụng Thần",
    element: "Thổ (Thực Thần – Thương Quan)",
    tenGod: "Thực Thần (Kỷ) & Thương Quan (Mậu)",
    desc: "Chiếm tỉ trọng lớn nhất lá số (~32.9%) và là bước tiết khí tự nhiên, trực tiếp đầu tiên ngay sau Hỏa vượng (Hỏa sinh Thổ) — lực cân bằng chủ đạo, có sẵn và hiệu quả nhất ngay từ hiện tại, không cần chờ vận trình đưa đến.",
  },
  {
    role: "hy-than" as const,
    colorElement: "kim" as const,
    title: "Hỷ Thần",
    element: "Kim (Tài Tinh)",
    tenGod: "Chính Tài (Canh) & Thiên Tài (Tân)",
    desc: "Tiếp nối ngay sau Dụng Thần Thổ trong dòng chảy (Thổ sinh Kim, ~24.3%) — vừa giúp duy trì đà tiết khí, vừa sinh thêm cho Thủy, đưa năng lượng cân bằng đi xa hơn về phía Quan Tinh.",
  },
  {
    role: "hy-than-phu" as const,
    colorElement: "thuy" as const,
    title: "Hỷ Thần phụ (mục tiêu cần nuôi dưỡng)",
    element: "Thủy (Quan Tinh)",
    tenGod: "Chính Quan (Nhâm)",
    desc: "Về lý thuyết đây là lực khắc chế trực tiếp Hỏa hiệu quả nhất, nhưng trong lá số Thủy cực yếu (chỉ ~4.3%, một mình Nhâm tàng trung khí trong Thân) — là đích đến cuối cùng của cả dòng chảy Hỏa → Thổ → Kim → Thủy, cần được Kim sinh trợ thêm mới đủ sức phát huy.",
  },
  {
    role: "ky-than" as const,
    colorElement: "hoa" as const,
    title: "Kỵ Thần",
    element: "Hỏa (Tỷ – Kiếp)",
    tenGod: "Tỷ Kiên (Đinh) & Kiếp Tài (Bính)",
    desc: "Nhật Chủ vốn đã đắc lệnh rất vượng — gặp thêm Tỷ Kiếp chỉ càng khiến bản thân cố chấp, nóng vội, dễ tranh giành hơn thấu hiểu.",
  },
  {
    role: "ky-than" as const,
    colorElement: "moc" as const,
    title: "Kỵ Thần",
    element: "Mộc (Ấn Tinh)",
    tenGod: "Chính Ấn (Giáp) & Thiên Ấn (Ất)",
    desc: "Ấn tinh sinh thêm cho Hỏa vốn đã vượng — dễ tạo tâm lý ỷ lại, được bao bọc quá mức thành ra thiếu chủ động, hoặc ngược lại cảm thấy kỳ vọng/áp lực từ người thân (đặc biệt từ mẹ) nặng nề hơn là nâng đỡ nhẹ nhàng.",
  },
];

export const elementRatios = [
  { element: "tho" as const, label: "Thổ", percent: 32.9 },
  { element: "kim" as const, label: "Kim", percent: 24.3 },
  { element: "hoa" as const, label: "Hỏa", percent: 22.9 },
  { element: "moc" as const, label: "Mộc", percent: 15.7 },
  { element: "thuy" as const, label: "Thủy", percent: 4.3 },
];

export const family = [
  {
    role: "Cha",
    tenGod: "Thiên Tài (Tân Kim, thấu can ở trụ Năm)",
    desc: "Cha xuất hiện sớm và rõ nét (trụ Năm), là Hỷ Thần nên nhìn chung là người có năng lực xoay xở, tạo dựng tài chính khá tốt — ảnh hưởng tích cực và khá đậm nét đến cách bạn nhìn nhận về tiền bạc, công việc ngay từ nhỏ.",
  },
  {
    role: "Mẹ",
    tenGod: "Ấn tinh (Giáp Mộc thấu can ở trụ Tháng, đắc lệnh)",
    desc: "Mẹ xuất hiện ở trụ Tháng — giai đoạn thời thơ ấu/niên thiếu, gắn bó và có ảnh hưởng sâu đậm, đắc lệnh nên tiếng nói của mẹ có trọng lượng lớn trong gia đình. Vì Ấn là Kỵ Thần nên sự quan tâm, bao bọc của mẹ đôi lúc lại vô tình trở thành khuôn khổ hoặc kỳ vọng khiến bạn cảm thấy ràng buộc hơn là được tự do.",
  },
  {
    role: "Anh chị em, bạn bè, đồng nghiệp",
    tenGod: "Tỷ Kiếp (~22.9% gộp cả Hỏa)",
    desc: "Vòng quan hệ khá rộng và có phần đông đảo, nhưng vì đây là Kỵ Thần nên tiềm ẩn cạnh tranh ngầm hoặc dễ bị so bì hơn thiệt — cần tỉnh táo khi hợp tác làm ăn, góp vốn chung với bạn bè/anh chị em.",
  },
  {
    role: "Chồng",
    tenGod: "Chính Quan (Nhâm Thủy, ẩn tàng trong Chi Giờ)",
    desc: "Chồng chỉ hiện diện dưới dạng ẩn tàng và nằm ở trụ Giờ — cung muộn nhất trong Tứ Trụ, gợi ý nhân duyên đến khá muộn hoặc phải quan sát/thấu hiểu kỹ mới nhận ra giá trị thật. Vì Quan Tinh là Hỷ Thần nhưng lực còn mỏng (chỉ ~4.3%), nên hôn nhân cần chủ động vun đắp, không nên trông chờ hoàn toàn vào duyên số.",
  },
  {
    role: "Con cái",
    tenGod: "Thực Thần – Thương Quan (Kỷ, Mậu — chiếm tỉ trọng lớn nhất lá số)",
    desc: "Cung con cái rất dồi dào và đồng thời là Hỷ Thần phụ — con cái nhiều khả năng là điểm tựa tinh thần lớn, mang lại niềm vui, thành tựu thật sự và là \"lối thoát\" giúp cân bằng lại cá tính mạnh mẽ, đôi khi nóng vội của bản thân.",
  },
];

export const marriage = [
  "Cung Phu Quân (Chi Giờ = Thân) nằm khá xa cung Phu Thê truyền thống (Chi Ngày = Mùi) — Thân và Mùi không có quan hệ hình/xung/hợp trực tiếp, gợi ý hôn nhân không chịu nhiều áp lực nội tại lặp lại như kiểu Tự Hình, nhưng cũng vì vậy mà không tự nhiên \"đến gần\" — cần chủ động tìm kiếm, ít khi tình cờ mà có.",
  "Quan Tinh (chồng) là Thủy, vốn là yếu tố yếu nhất lá số — nên phần lớn hành trình tìm được người phù hợp sẽ gắn liền với việc bản thân phát triển đúng hướng Tài (Kim) trước, vì Tài sinh Quan: sự nghiệp/tài chính ổn định thường đi trước, kéo theo nhân duyên tốt đẹp theo sau chứ không phải ngược lại.",
  "Thân vượng, cá tính mạnh (Tỷ Kiếp khá đậm) kết hợp Quan Tinh mỏng — cần chọn người bạn đời đủ vững vàng, không quá nhu nhược, nếu không dễ rơi vào thế một người quán xuyến hoàn toàn, người kia trở nên mờ nhạt trong mối quan hệ.",
];

export const health = [
  {
    organ: "Tim mạch, huyết áp, mắt",
    element: "hoa" as const,
    note: "Hỏa khá vượng (22.9%) và đắc lệnh — cần chú ý các vấn đề liên quan tim mạch, huyết áp, dễ nóng nảy/mất ngủ khi căng thẳng kéo dài. Nên ưu tiên các bộ môn giúp hạ hỏa: bơi lội, yoga, thiền.",
  },
  {
    organ: "Hệ tiêu hóa — dạ dày, tì vị",
    element: "tho" as const,
    note: "Thổ chiếm tỉ trọng lớn nhất (32.9%) — dễ ăn uống thất thường, đầy bụng nếu sinh hoạt không điều độ; nên ăn đúng giờ, tránh bỏ bữa.",
  },
  {
    organ: "Phổi, hệ hô hấp, da",
    element: "kim" as const,
    note: "Kim khá vượng (24.3%, là Hỷ Thần) — nhìn chung là điểm mạnh về thể trạng, nhưng nên tránh môi trường ô nhiễm/khói bụi kéo dài để giữ được lợi thế này.",
  },
  {
    organ: "Thận, hệ tiết niệu, xương khớp",
    element: "thuy" as const,
    note: "Thủy rất yếu (chỉ 4.3%) — cần chủ động bù đắp: uống đủ nước, tránh thức khuya, hạn chế đồ ăn mặn/nhiều đạm kéo dài, tầm soát định kỳ nếu có dấu hiệu bất thường vùng thắt lưng.",
  },
];

export const healthGeneral =
  "Ưu tiên các hoạt động vừa hạ bớt Hỏa vừa bồi bổ Thủy (bơi lội, các môn thể thao dưới nước, thiền định), ăn uống điều độ đúng giờ để nâng đỡ Thổ, hạn chế môi trường ồn ào/áp lực cao kéo dài vì dễ khiến Hỏa vượng thêm bộc phát.";

export const wealth = {
  taiTinh:
    "Canh Kim (Chính Tài) và Tân Kim (Thiên Tài) đều hiện diện — Tân thấu lộ ngay trụ Năm, Canh tàng trong cả Tỵ lẫn Thân — Tài Tinh là Hỷ Thần, nối tiếp ngay sau Dụng Thần Thổ trong dòng chảy cân bằng của lá số, lại có gốc khá vững, cho thấy khả năng tạo ra và tích lũy tiền bạc tốt, đặc biệt qua các lĩnh vực liên quan Kim (tài chính, kim loại, công nghệ, kỹ thuật chính xác) hoặc bất cứ ngành nào đòi hỏi độ chuẩn xác, kỷ luật.",
  risk:
    "Rủi ro lớn nhất đến từ Tỷ Kiếp (Kỵ Thần, ~22.9%) — dễ hao tài vì nể nang bạn bè/anh chị em, cho vay mượn khó đòi, hùn vốn không rõ ràng. Ngoài ra Thân vượng dễ khiến quyết định chi tiêu mang tính bộc phát, cảm tính nhất thời hơn là tính toán dài hạn.",
  suggestion:
    "Nên minh bạch hóa mọi giao dịch tài chính với người thân/bạn bè ngay từ đầu; ưu tiên tích lũy có kỷ luật (tự động trích một phần thu nhập) hơn là để chi tiêu tự do theo cảm xúc; giai đoạn Đại Vận có Kim/Thủy (Canh Tý 58–67t, Tân Sửu 68–77t, Nhâm Dần 78–87t) thường là lúc tài chính vào guồng ổn định và bền vững nhất.",
};

export const career = [
  "Thực Thần – Thương Quan (Thổ, Dụng Thần, ~32.9% — nhóm lớn nhất lá số) cho năng khiếu thể hiện bản thân, sáng tạo, ăn nói tốt; phát huy mạnh nhất trong các vai trò cần trình bày, thuyết phục, sáng tạo nội dung, xây dựng thương hiệu cá nhân.",
  "Kết hợp thêm hành Kim (Hỷ Thần — tài chính, kỹ thuật chính xác, công nghệ, luật) và Thủy (Hỷ Thần phụ — truyền thông, tư vấn, ngoại giao, giao thương quốc tế) làm hướng phát triển tiếp theo, đúng thứ tự dòng chảy cân bằng của lá số.",
  "Tỷ Kiếp vượng (Kỵ Thần) khiến môi trường làm việc dễ có cạnh tranh trực diện — phù hợp hơn với vai trò chủ động dẫn dắt (do Nhật Chủ vượng, đủ sức đứng đầu) thay vì phụ thuộc hoàn toàn vào một tập thể lớn không rõ vai trò.",
];

export const thanSatByPillar = [
  {
    pillar: "Năm (Tân Tỵ)",
    list: ["Học Đường", "Kình Dương", "Phúc Tinh", "Quốc Ấn", "Thiên Y", "Trạch Mã"],
  },
  {
    pillar: "Tháng (Giáp Ngọ)",
    list: ["Hàm Trì", "Lộc Thần", "Thiên Ất", "Thiên Xá"],
  },
  {
    pillar: "Ngày (Đinh Mùi)",
    list: ["Âm Dương Lệch", "Bát Chuyên", "Đức Quý Nhân", "Hồng Diễm"],
  },
  {
    pillar: "Giờ (Mậu Thân)",
    list: ["Cấu Giảo", "Cô Thần", "Giáp Lộc", "Hồng Loan", "Kiếp Sát", "Kim Dư", "Lưu Hà Sát", "Tú Quý Nhân"],
  },
];

export type ThanSatNature = "tot" | "xau" | "trung-tinh";

export const thanSatMeanings: { name: string; freq: string; desc: string; nature: ThanSatNature }[] = [
  { name: "Học Đường", freq: "Năm", desc: "Sao chủ về học hành, thi cử, thông minh, hiếu học. Người có Học Đường thường có duyên với trường lớp, sách vở, dễ đạt thành tích trong học tập.", nature: "tot" },
  { name: "Kình Dương", freq: "Năm", desc: "Sao hung — cá tính nóng vội, quyết đoán tới mức cực đoan, dễ va vấp tai nạn liên quan dao kéo/vật sắc nhọn hoặc phẫu thuật. Cần rèn sự điềm tĩnh.", nature: "xau" },
  { name: "Phúc Tinh", freq: "Năm", desc: "Sao cát — chủ về phúc đức, may mắn, có khả năng hóa giải hung sát. Người có Phúc Tinh thường được tổ tiên phù hộ, gặp dữ hóa lành.", nature: "tot" },
  { name: "Quốc Ấn", freq: "Năm", desc: "Sao cát — chủ về quyền lực, địa vị 'chính danh'. Có duyên với công việc nhà nước, cơ quan chính phủ, hoặc các tổ chức lớn.", nature: "tot" },
  { name: "Thiên Y", freq: "Năm", desc: "Sao cát — có duyên với nghề y dược, chữa bệnh, chăm sóc sức khỏe người khác; cũng gợi ý bản thân cần chủ động chăm sóc sức khỏe.", nature: "tot" },
  { name: "Trạch Mã", freq: "Năm", desc: "Sao chủ về di chuyển — có duyên đi xa, thay đổi chỗ ở/công việc, thuận lợi với các ngành liên quan xuất ngoại, giao thương, du lịch.", nature: "trung-tinh" },
  { name: "Hàm Trì", freq: "Tháng", desc: "Sao đào hoa — sức hút ngoại hình tốt, dễ được chú ý trong giao tiếp; cần tiết chế để tránh thị phi tình cảm.", nature: "trung-tinh" },
  { name: "Lộc Thần", freq: "Tháng", desc: "Sao cát — ứng với cách Kiến Lộc, chủ về tài lộc ổn định, cuộc sống no đủ, có lộc từ chính bản thân mình tạo ra.", nature: "tot" },
  { name: "Thiên Ất", freq: "Tháng", desc: "Sao quý nhân bậc nhất — luôn có người giúp đỡ đúng lúc khó khăn, gặp dữ hóa lành.", nature: "tot" },
  { name: "Thiên Xá", freq: "Tháng", desc: "Sao cát — mang ý nghĩa ân xá, giúp hóa giải bớt tai họa, giảm nhẹ hung sát khác trong lá số.", nature: "tot" },
  { name: "Âm Dương Lệch", freq: "Ngày", desc: "Sao chủ về hôn nhân có phần trắc trở, dễ lệch pha quan điểm/tuổi tác với bạn đời — cần thấu hiểu, nhường nhịn nhiều hơn để giữ hòa khí.", nature: "xau" },
  { name: "Bát Chuyên", freq: "Ngày", desc: "Sao chủ về sự chuyên nhất, dễ đặt hết tâm trí vào một hướng (công việc, đam mê) — ưu điểm là chuyên sâu nhưng dễ cô đơn trong đời sống tình cảm.", nature: "trung-tinh" },
  { name: "Đức Quý Nhân", freq: "Ngày", desc: "Sao cát — chủ về việc được người khác giúp đỡ, gặp dữ hóa lành. Quý nhân phù trợ đúng lúc, thường xuất hiện khi gặp khó khăn.", nature: "tot" },
  { name: "Hồng Diễm", freq: "Ngày", desc: "Sao đào hoa phụ — chủ về sức hút ngoại hình, dễ có duyên tình cảm. Tuy nhiên cần tiết chế để tránh thị phi.", nature: "trung-tinh" },
  { name: "Cấu Giảo", freq: "Giờ", desc: "Sao hung — dễ gặp thị phi, khẩu thiệt, hiểu lầm hoặc tranh chấp/kiện tụng nếu không cẩn trọng trong lời ăn tiếng nói.", nature: "xau" },
  { name: "Cô Thần", freq: "Giờ", desc: "Sao chủ về sự cô đơn — nhắc nhở cần chủ động vun đắp các mối quan hệ, tránh khép kín trong tình cảm.", nature: "xau" },
  { name: "Giáp Lộc", freq: "Giờ", desc: "Sao cát — tài lộc kép, dồi dào, thường gắn với khả năng tạo ra thu nhập tốt từ chính năng lực bản thân.", nature: "tot" },
  { name: "Hồng Loan", freq: "Giờ", desc: "Sao đào hoa chính — chủ về duyên tình duyên vợ chồng tốt đẹp, dễ gặp được người ưng ý, hôn nhân có phần thuận lợi hơn.", nature: "tot" },
  { name: "Kiếp Sát", freq: "Giờ", desc: "Sao hung — chủ về mất mát, hao tài, tai họa bất ngờ. Cần cẩn trọng trong các vấn đề liên quan đến tiền bạc, hợp đồng, đi lại xa.", nature: "xau" },
  { name: "Kim Dư", freq: "Giờ", desc: "Sao cát — chủ về sự dư dả tài chính, phúc lộc, cuộc sống về sau có phần sung túc hơn giai đoạn đầu đời.", nature: "tot" },
  { name: "Lưu Hà Sát", freq: "Giờ", desc: "Sao hung — cần cẩn trọng tai nạn liên quan đến nước, dao kéo, phẫu thuật. Đi lại đường thủy hoặc vùng sông nước nên thận trọng.", nature: "xau" },
  { name: "Tú Quý Nhân", freq: "Giờ", desc: "Sao cát — một loại quý nhân, chủ về việc gặp dữ hóa lành, được người khác giúp đỡ vào những lúc khó khăn.", nature: "tot" },
];

export const thanSatSummary =
  "Nhóm hung (Kình Dương, Cấu Giảo, Cô Thần, Kiếp Sát, Lưu Hà Sát, Âm Dương Lệch) xoay quanh cá tính nóng vội/thị phi/hao tổn/cô đơn — cần chủ động tiết chế và hóa giải. Nhóm cát khá dồi dào (Lộc Thần, Thiên Ất, Đức Quý Nhân, Hồng Loan, Giáp Lộc, Kim Dư...) đóng vai trò nâng đỡ đáng kể, đặc biệt Hồng Loan ở trụ Giờ là điểm sáng cho đường tình duyên.";

/* ──────── Đại Vận (8 chặng, mỗi chặng 10 năm) ────────
 * Số tính đại vận = 23.7059259259258; nhập Đại Vận lúc 7 tuổi 11 tháng.
 * Tiết Mang Chủng bắt đầu 05-06-2001 21:53; Khí Hạ Chí 21-06-2001 14:37 – 07-07-2001 08:06. */
export const daiVan = [
  { ganChi: "Ất Mùi", start: "05/2009", startYear: 2009, age: 8, tenGod: "Thiên Ấn", favorable: false },
  { ganChi: "Bính Thân", start: "05/2019", startYear: 2019, age: 18, tenGod: "Kiếp Tài", favorable: false },
  { ganChi: "Đinh Dậu", start: "05/2029", startYear: 2029, age: 28, tenGod: "Tỷ Kiên", favorable: false },
  { ganChi: "Mậu Tuất", start: "04/2039", startYear: 2039, age: 38, tenGod: "Thương Quan", favorable: true },
  { ganChi: "Kỷ Hợi", start: "04/2049", startYear: 2049, age: 48, tenGod: "Thực Thần", favorable: true },
  { ganChi: "Canh Tý", start: "04/2059", startYear: 2059, age: 58, tenGod: "Chính Tài", favorable: true },
  { ganChi: "Tân Sửu", start: "04/2069", startYear: 2069, age: 68, tenGod: "Thiên Tài", favorable: true },
  { ganChi: "Nhâm Dần", start: "04/2079", startYear: 2079, age: 78, tenGod: "Chính Quan", favorable: true },
];

export const daiVanNote =
  "Ba chặng đầu đời (Ất Mùi, Bính Thân, Đinh Dậu — 8 đến 37 tuổi) đều mang Hỏa/Mộc, đúng nhóm Kỵ Thần — giai đoạn tự thân vất vả nhiều hơn, cá tính mạnh dễ va vấp, cần chủ động tiết chế và định hướng đúng thay vì trông chờ thuận lợi tự đến. Từ 38 tuổi trở đi (Mậu Tuất, Kỷ Hợi, Canh Tý, Tân Sửu, Nhâm Dần) vận trình dịch chuyển đều đặn sang Thổ rồi Kim rồi Thủy — đúng thứ tự \"sinh xuất\" mà lá số cần, nên trung niên về sau là giai đoạn vận trình rõ ràng thuận lợi và ổn định nhất.";
export const daiVanMeta = "Nghịch hành từ Giáp Ngọ, nhập vận lúc 7 tuổi 11 tháng.";

/* ──────── Lưu Niên theo từng Đại Vận (dữ liệu Can Chi + Thập Thần thật, sinh nhận xét ngắn theo nhóm Dụng/Hỷ/Kỵ) ──────── */
type TG = "THỰC" | "C.TÀI" | "T.TÀI" | "QUAN" | "SÁT" | "ẤN" | "KIÊU" | "KIẾP" | "TỶ" | "THƯƠNG";
const TG_FULL: Record<TG, string> = {
  THỰC: "Thực Thần", "C.TÀI": "Chính Tài", "T.TÀI": "Thiên Tài", QUAN: "Chính Quan", SÁT: "Thất Sát",
  ẤN: "Chính Ấn", KIÊU: "Thiên Ấn", KIẾP: "Kiếp Tài", TỶ: "Tỷ Kiên", THƯƠNG: "Thương Quan",
};
// Dụng = Thổ (Thực/Thương), Hỷ = Kim (Tài) & Thủy (Quan/Sát), Kỵ = Hỏa (Tỷ/Kiếp) & Mộc (Ấn/Kiêu)
const TG_TIER: Record<TG, "dung" | "hy" | "ky"> = {
  THỰC: "dung", THƯƠNG: "dung", "C.TÀI": "hy", "T.TÀI": "hy", QUAN: "hy", SÁT: "hy",
  TỶ: "ky", KIẾP: "ky", ẤN: "ky", KIÊU: "ky",
};
const NOTE: Record<"dung" | "hy" | "ky", { tinhCam: string; tienBac: string; congViec: string; giaDinh: string; sucKhoe: string }> = {
  dung: { tinhCam: "Năm thuận, dễ gặp người phù hợp hoặc tình cảm ổn định.", tienBac: "Tài chính khởi sắc, có cơ hội tích lũy tốt.", congViec: "Công việc thuận lợi, dễ có bước tiến rõ rệt.", giaDinh: "Gia đình hòa thuận, ít va chạm.", sucKhoe: "Sức khỏe ổn định, năng lượng tốt." },
  hy: { tinhCam: "Tình cảm nhẹ nhàng, có quý nhân hoặc cơ hội mới xuất hiện.", tienBac: "Tài chính ổn, có thêm nguồn thu phụ.", congViec: "Công việc tiến triển đều, phát huy được năng khiếu cá nhân.", giaDinh: "Gia đình bình an, được hỗ trợ khi cần.", sucKhoe: "Sức khỏe khá tốt, nên duy trì vận động." },
  ky: { tinhCam: "Dễ nóng vội, cần kiềm chế để tránh mâu thuẫn không đáng có.", tienBac: "Nên thận trọng chi tiêu, tránh cho vay mượn cảm tính.", congViec: "Áp lực/cạnh tranh tăng, cần giữ kiên nhẫn.", giaDinh: "Có thể phát sinh căng thẳng nhỏ, cần chủ động thấu hiểu.", sucKhoe: "Dễ mệt mỏi, stress — chú ý nghỉ ngơi và hạ hỏa." },
};
function luuNienYears(entries: [number, string, TG][]) {
  return entries.map(([nam, canChi, tg]) => {
    const n = NOTE[TG_TIER[tg]];
    const label = `${canChi} — ${TG_FULL[tg]}`;
    return { nam, canChi: label, tinhCam: n.tinhCam, tienBac: n.tienBac, congViec: n.congViec, giaDinh: n.giaDinh, sucKhoe: n.sucKhoe };
  });
}

export const luuNienByDaiVan: Record<string, { nam: number; canChi: string; tinhCam: string; tienBac: string; congViec: string; giaDinh: string; sucKhoe: string }[]> = {
  "Ất Mùi": luuNienYears([
    [2009, "Kỷ Sửu", "THỰC"], [2010, "Canh Dần", "C.TÀI"], [2011, "Tân Mão", "T.TÀI"], [2012, "Nhâm Thìn", "QUAN"],
    [2013, "Quý Tỵ", "SÁT"], [2014, "Giáp Ngọ", "ẤN"], [2015, "Ất Mùi", "KIÊU"], [2016, "Bính Thân", "KIẾP"],
    [2017, "Đinh Dậu", "TỶ"], [2018, "Mậu Tuất", "THƯƠNG"], [2019, "Kỷ Hợi", "THỰC"],
  ]),
  "Bính Thân": luuNienYears([
    [2019, "Kỷ Hợi", "THỰC"], [2020, "Canh Tý", "C.TÀI"], [2021, "Tân Sửu", "T.TÀI"], [2022, "Nhâm Dần", "QUAN"],
    [2023, "Quý Mão", "SÁT"], [2024, "Giáp Thìn", "ẤN"], [2025, "Ất Tỵ", "KIÊU"], [2026, "Bính Ngọ", "KIẾP"],
    [2027, "Đinh Mùi", "TỶ"], [2028, "Mậu Thân", "THƯƠNG"], [2029, "Kỷ Dậu", "THỰC"],
  ]),
  "Đinh Dậu": luuNienYears([
    [2029, "Kỷ Dậu", "THỰC"], [2030, "Canh Tuất", "C.TÀI"], [2031, "Tân Hợi", "T.TÀI"], [2032, "Nhâm Tý", "QUAN"],
    [2033, "Quý Sửu", "SÁT"], [2034, "Giáp Dần", "ẤN"], [2035, "Ất Mão", "KIÊU"], [2036, "Bính Thìn", "KIẾP"],
    [2037, "Đinh Tỵ", "TỶ"], [2038, "Mậu Ngọ", "THƯƠNG"], [2039, "Kỷ Mùi", "THỰC"],
  ]),
  "Mậu Tuất": luuNienYears([
    [2039, "Kỷ Mùi", "THỰC"], [2040, "Canh Thân", "C.TÀI"], [2041, "Tân Dậu", "T.TÀI"], [2042, "Nhâm Tuất", "QUAN"],
    [2043, "Quý Hợi", "SÁT"], [2044, "Giáp Tý", "ẤN"], [2045, "Ất Sửu", "KIÊU"], [2046, "Bính Dần", "KIẾP"],
    [2047, "Đinh Mão", "TỶ"], [2048, "Mậu Thìn", "THƯƠNG"], [2049, "Kỷ Tỵ", "THỰC"],
  ]),
  "Kỷ Hợi": luuNienYears([
    [2049, "Kỷ Tỵ", "THỰC"], [2050, "Canh Ngọ", "C.TÀI"], [2051, "Tân Mùi", "T.TÀI"], [2052, "Nhâm Thân", "QUAN"],
    [2053, "Quý Dậu", "SÁT"], [2054, "Giáp Tuất", "ẤN"], [2055, "Ất Hợi", "KIÊU"], [2056, "Bính Tý", "KIẾP"],
    [2057, "Đinh Sửu", "TỶ"], [2058, "Mậu Dần", "THƯƠNG"], [2059, "Kỷ Mão", "THỰC"],
  ]),
  "Canh Tý": luuNienYears([
    [2059, "Kỷ Mão", "THỰC"], [2060, "Canh Thìn", "C.TÀI"], [2061, "Tân Tỵ", "T.TÀI"], [2062, "Nhâm Ngọ", "QUAN"],
    [2063, "Quý Mùi", "SÁT"], [2064, "Giáp Thân", "ẤN"], [2065, "Ất Dậu", "KIÊU"], [2066, "Bính Tuất", "KIẾP"],
    [2067, "Đinh Hợi", "TỶ"], [2068, "Mậu Tý", "THƯƠNG"], [2069, "Kỷ Sửu", "THỰC"],
  ]),
  "Tân Sửu": luuNienYears([
    [2069, "Kỷ Sửu", "THỰC"], [2070, "Canh Dần", "C.TÀI"], [2071, "Tân Mão", "T.TÀI"], [2072, "Nhâm Thìn", "QUAN"],
    [2073, "Quý Tỵ", "SÁT"], [2074, "Giáp Ngọ", "ẤN"], [2075, "Ất Mùi", "KIÊU"], [2076, "Bính Thân", "KIẾP"],
    [2077, "Đinh Dậu", "TỶ"], [2078, "Mậu Tuất", "THƯƠNG"], [2079, "Kỷ Hợi", "THỰC"],
  ]),
  "Nhâm Dần": luuNienYears([
    [2079, "Kỷ Hợi", "THỰC"], [2080, "Canh Tý", "C.TÀI"], [2081, "Tân Sửu", "T.TÀI"], [2082, "Nhâm Dần", "QUAN"],
    [2083, "Quý Mão", "SÁT"], [2084, "Giáp Thìn", "ẤN"], [2085, "Ất Tỵ", "KIÊU"], [2086, "Bính Ngọ", "KIẾP"],
    [2087, "Đinh Mùi", "TỶ"], [2088, "Mậu Thân", "THƯƠNG"], [2089, "Kỷ Dậu", "THỰC"],
  ]),
};

export const tamThinTuHinh = {
  title: "Ghi chú cách cục",
  paragraphs: [
    "Không xuất hiện tổ hợp Hình/Xung/Hại nào giữa 4 Địa Chi (Tỵ – Ngọ – Mùi – Thân) — các Chi chỉ liên tiếp về mặt vị trí nhưng không tạo thế xung khắc nội tại như một số lá số khác.",
    "Điểm đáng chú ý là Ngọ và Mùi hợp thành \"Lục Hợp\" (Ngọ–Mùi hợp hóa), góp phần củng cố thêm nền tảng vững chắc quanh Nhật Chủ ở giai đoạn niên thiếu đến trưởng thành.",
  ],
};

export const summary =
  "Đây là lá số Thân vượng, cách Kiến Lộc — Nhật Chủ Đinh Hỏa đắc lệnh tại tháng Ngọ, có gốc vững ở Mùi, lại được Giáp Mộc sinh trợ thêm (kết luận Vượng dựa trên đắc lệnh và cách cục, dù nếu chỉ đếm thô tỉ trọng Can Chi thì phe sinh/trợ chỉ ~38.6%, thấp hơn phe tiết/hao/khắc ~61.4% — điều này càng cho thấy lá số có lối thoát/dòng chảy rất tốt chứ không phải vượng bế tắc). Khác với một Thân cực vượng thuần túy, lá số có Thực-Thương (Thổ, Dụng Thần) và Tài Tinh (Kim, Hỷ Thần) khá dồi dào, tạo thành dòng chảy sinh xuất mạch lạc Hỏa→Thổ→Kim→Thủy. Thổ là lực cân bằng có sẵn, hiệu quả ngay từ hiện tại; Thủy (Quan Tinh — cũng là chồng trong lá số) là điểm mỏng nhất ở cuối dòng chảy, cần được nuôi dưỡng qua chính con đường Tài (sự nghiệp/tài chính vững trước, nhân duyên đến sau). Ba Đại Vận đầu đời (8–37 tuổi) thuộc nhóm Kỵ Thần nên giai đoạn này đòi hỏi chủ động và kiên nhẫn nhiều hơn; từ 38 tuổi trở đi vận trình chuyển đều sang đúng hướng Thổ–Kim–Thủy mà lá số cần, mở ra giai đoạn ổn định và thuận lợi rõ rệt nhất trong cả cuộc đời.";
