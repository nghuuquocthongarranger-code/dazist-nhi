export const combinedSummaryIntro =
  "Bốn hệ thống dưới đây hình thành độc lập với nhau — Bát Tự và Tử Vi từ lịch Can Chi phương Đông (nhưng theo hai lối tính hoàn toàn khác nhau), Chiêm tinh học từ vị trí hành tinh phương Tây, Thần số học từ toán học biểu tượng của họ tên và ngày sinh — nên không hề \"vay mượn\" ý tưởng của nhau. Khi nhiều hệ thống cùng chỉ về một chủ đề, đó là tín hiệu đáng tin cậy hơn hẳn so với khi chỉ một hệ thống đơn lẻ nêu ra.";

export interface ConvergentTheme {
  title: string;
  bazi?: string;
  western?: string;
  numerology?: string;
  tuVi?: string;
  synthesis: string;
}

export const convergentThemes: ConvergentTheme[] = [
  {
    title: "Kỷ luật là bài học cần chủ động trả, không tự nhiên mà có",
    bazi: "Tỷ Kiếp và Ấn Tinh (Hỏa, Mộc) đều là Kỵ Thần — Thân vượng dễ nóng vội, cố chấp, cần chủ động tiết chế thay vì để bản năng dẫn dắt.",
    numerology: "Nợ Nghiệp Quả 13/4 xuất hiện tới hai lần — cả trong Số Chủ Đạo lẫn Số Ngày Sinh — một tín hiệu rất mạnh cho thấy bài học kỷ luật/trách nhiệm từng bị trì hoãn và nay cần trả gấp bội qua nỗ lực thật sự.",
    tuVi: "Cung Mệnh (Thiên Phủ Bình) đang ở trạng thái \"Suy\" trong Vòng Trường Sinh, lại gặp Tuần — thành quả đầu đời có xu hướng đến chậm, cần kiên nhẫn tích lũy dần thay vì mong bứt phá nhanh.",
    synthesis:
      "Cả ba hệ thống đều không mô tả một khởi đầu thuận lợi tự nhiên, mà là một hành trình cần chủ động xây dựng kỷ luật và kiên nhẫn theo thời gian — đặc biệt tín hiệu Nợ Nghiệp Quả lặp lại hai lần bên Thần Số Học là lời nhắc rất đáng lưu tâm.",
  },
  {
    title: "Vẻ ngoài sôi nổi, nội tâm cần không gian riêng để bộc lộ chiều sâu",
    western: "Cung Mọc Bọ Cạp (trầm tĩnh, thận trọng) bao bọc một chùm 4 sao Song Tử bên trong (linh hoạt, ham nói) — người mới quen thường chỉ thấy lớp vỏ kín đáo trước, phải mất thời gian mới thấy hết sự sôi nổi thật sự bên trong.",
    numerology: "Số Nhân Cách 3 (ấn tượng đầu vui vẻ, cuốn hút) khác hẳn Số Linh Hồn 7 (khao khát tri thức, cần nhiều thời gian một mình) — hai lớp tính cách hướng ra ngoài và hướng vào trong tồn tại song song.",
    tuVi: "Cung Mệnh Thiên Phủ ở thế Bình — tính cách nền tảng vốn điềm đạm, kín đáo, không phô trương, cần thời gian mới bộc lộ hết.",
    synthesis:
      "Ba hệ thống đều mô tả một người có ít nhất hai lớp tính cách rõ rệt: bên ngoài (dù là trầm tĩnh kiểu Bọ Cạp hay vui vẻ kiểu số 3) chỉ là phần nổi, còn chiều sâu thật sự — dù là sự sôi nổi Song Tử hay khao khát tri thức số 7 — cần thời gian và sự tin tưởng mới thật sự lộ ra.",
  },
  {
    title: "Tài chính và giá trị bản thân là chủ đề cần chủ động, dễ biến động",
    bazi: "Tài Tinh (Kim) là Hỷ Thần, có sẵn lực trong lá số — nhưng Quan Tinh (Thủy, cũng là chồng) lại rất yếu, cho thấy sự an toàn/giá trị bản thân cần được chủ động xây dựng, không tự nhiên đến.",
    western: "Cụm Sao Hỏa – Diêm Vương – Chiron hội tụ tại Nhà 2 (Tài Bạch) — tài chính và cảm giác giá trị bản thân gắn chặt với nhau, dễ trải qua giai đoạn biến động mạnh hoặc cảm xúc dồn nén nếu không được nhìn nhận đúng mức.",
    tuVi: "Cung Tài Bạch vô chính diệu, lại gặp Triệt — tài chính phần nhiều phụ thuộc vào sự chủ động của bản thân (đối chiếu cung Mệnh) hơn là trông chờ vận may.",
    synthesis:
      "Cả ba hệ thống đều đồng thuận: tài chính không phải điều tự nhiên đến mà gắn rất chặt với việc bản thân có tin vào giá trị của chính mình hay không — càng vững tâm lý, tài chính càng có xu hướng ổn định theo.",
  },
  {
    title: "Hôn nhân cần thời gian, sự chủ động và học cách nhường nhịn",
    bazi: "Quan Tinh (chồng) chỉ ẩn tàng trong Chi Giờ, không thấu lộ — nhân duyên đến muộn, cần chủ động tìm kiếm và thấu hiểu mới nhận ra giá trị thật.",
    western: "Kim Tinh tại Kim Ngưu (Nhà 6) yêu chậm mà chắc, cần thời gian xây dựng lòng tin qua hành động thiết thực hơn là lời nói.",
    tuVi: "Cung Phu Thê có Tử Vi – Phá Quân — bạn đời có cá tính mạnh, chủ kiến rõ ràng, đòi hỏi cả hai cùng nhường nhịn, tôn trọng không gian riêng của nhau.",
    synthesis:
      "Không hệ thống nào ủng hộ một mối tình yêu nhanh, dễ dàng — cả ba đều chỉ về một hôn nhân cần thời gian, sự chủ động vun đắp và khả năng nhường nhịn hai chiều mới thật sự bền vững.",
  },
];
