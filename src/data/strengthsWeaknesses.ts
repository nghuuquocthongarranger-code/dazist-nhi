export type Source = "bazi" | "western" | "numerology" | "tuvi" | "both" | "all";

export interface SwItem {
  text: string;
  source: Source;
}

export const strengths: SwItem[] = [
  {
    text: "Nhật Chủ đắc lệnh (Bát Tự) + Số Sứ Mệnh 1 (tiên phong) + Số Nhân Cách 3 (cuốn hút) đều chỉ về một người có sức ảnh hưởng, dễ trở thành người dẫn dắt trong tập thể — tiềm năng lãnh đạo thể hiện khá rõ ràng, không cần khơi mở nhiều như một số lá số khác.",
    source: "all",
  },
  {
    text: "Tài Tinh (Kim) là Hỷ Thần Bát Tự, lại đi cùng Lộc Tồn ở cung Mệnh Tử Vi — nền tảng tài chính vững, khả năng tích lũy tốt nếu biết kiên trì.",
    source: "both",
  },
  {
    text: "Thực – Thương (Thổ) chiếm tỉ trọng lớn nhất lá số Bát Tự — năng khiếu thể hiện bản thân, sáng tạo, ăn nói tốt, đồng thời là Dụng Thần chủ đạo giúp tiết bớt cá tính nóng vội.",
    source: "bazi",
  },
  {
    text: "Chùm 4 sao tại Song Tử (Mặt Trời, Thủy Tinh, Sao Mộc, Thổ Tinh) cho khả năng giao tiếp, học hỏi và xử lý đa nhiệm vượt trội — hiếm khi bí ý tưởng hoặc thiếu chủ đề để nói.",
    source: "western",
  },
  {
    text: "Mặt Trăng Song Ngư ở Nhà 5 mang trực giác nghệ thuật, khả năng sáng tạo và đồng cảm sâu sắc — thế mạnh tự nhiên trong các lĩnh vực cần cảm xúc/thẩm mỹ.",
    source: "western",
  },
  {
    text: "Số Ngày Sinh 4 (dù mang Nợ Nghiệp Quả) vẫn là tài lẻ về phương pháp, tổ chức — một khi đã rèn được kỷ luật thì làm việc rất bền và đáng tin cậy.",
    source: "numerology",
  },
  {
    text: "Số Trưởng Thành 5 hứa hẹn giai đoạn trung niên trở về sau cởi mở, linh hoạt hơn nhiều so với nền tảng thận trọng ban đầu — cuộc sống có xu hướng ngày càng tự do, chủ động hơn theo thời gian.",
    source: "numerology",
  },
  {
    text: "Cung Quan Lộc (đóng cung Thân) có Thiên Tướng đắc — tinh thần trách nhiệm cao, đáng tin cậy, phù hợp vai trò quản lý/tham mưu, sự nghiệp đạt độ chín ở tuổi trung niên.",
    source: "tuvi",
  },
  {
    text: "Cung Phụ Mẫu có Thái Âm miếu — nền tảng gia đình êm ấm, được cha mẹ (đặc biệt mẹ) chăm sóc chu đáo, là điểm tựa vững chắc thời niên thiếu.",
    source: "tuvi",
  },
];

export const weaknesses: SwItem[] = [
  {
    text: "Nợ Nghiệp Quả 13/4 (Thần Số Học) cộng hưởng với nhóm Tỷ Kiếp/Ấn (Kỵ Thần, Bát Tự) — bài học chung là dễ nóng vội, ngại kỷ luật/khuôn khổ ở giai đoạn đầu đời, cần chủ động rèn giũa thay vì né tránh, nếu không trở ngại có xu hướng lặp lại.",
    source: "all",
  },
  {
    text: "Cung Mệnh Tử Vi gặp Tuần, Tài Bạch gặp Triệt, cộng thêm Quan Tinh (chồng, Bát Tự) còn yếu — nhiều lĩnh vực quan trọng của cuộc sống (danh phận, tài chính, hôn nhân) đều cần thời gian và sự chủ động mới thành hình, không tự nhiên mà có.",
    source: "both",
  },
  {
    text: "Tỷ Kiếp khá vượng (Kỵ Thần) — dễ hao tài vì nể nang bạn bè/anh chị em, cần minh bạch hóa các giao dịch tài chính chung.",
    source: "bazi",
  },
  {
    text: "Ấn Tinh (Mộc) dư — Kỵ Thần — dễ cảm thấy áp lực/kỳ vọng từ người thân (đặc biệt mẹ) nặng nề hơn là được nâng đỡ nhẹ nhàng.",
    source: "bazi",
  },
  {
    text: "Cụm Sao Hỏa – Diêm Vương – Chiron tại Nhân Mã (Nhà 2) — tài chính/giá trị bản thân dễ trải qua biến động mạnh, căng thẳng dồn nén dễ biểu hiện ra thể chất (vùng hông – đùi).",
    source: "western",
  },
  {
    text: "Ascendant Bọ Cạp khiến bước đầu mọi mối quan hệ khá dè dặt, cần thời gian dài mới thật sự tin tưởng — dễ bị hiểu lầm là lạnh lùng hoặc khó gần.",
    source: "western",
  },
  {
    text: "Bài Học Nghiệp Quả thiếu số 3 và số 4 — dù Nhân Cách bên ngoài là số 3 (vui vẻ), năng lực tổ chức/kỷ luật thật sự (số 4) vẫn cần chủ động rèn luyện nhiều hơn là tự nhiên có sẵn.",
    source: "numerology",
  },
  {
    text: "Cung Phúc Đức có Liêm Tham đồng hãm (giai đoạn 26–35 tuổi) — đời sống tinh thần dễ trăn trở, tham vọng nhiều nhưng chưa dễ thỏa mãn, cần tìm về giá trị bền vững thay vì chạy theo ham muốn nhất thời.",
    source: "tuvi",
  },
  {
    text: "Cung Phu Thê có Tử Phá — bạn đời/bản thân đều có cá tính mạnh, cần học cách nhường nhịn, tôn trọng không gian riêng để hôn nhân bền vững.",
    source: "tuvi",
  },
];
