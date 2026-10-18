# Hệ Thống Funnel Tuyển F1 Tự Động (Dành Cho Thủ Lĩnh MLM & Kinh Doanh Mạng Lưới)

## 🎯 1. Chiến Lược "Attraction Marketing" – Tại Sao Mô Hình Này Tuyển F1 Cực Đỉnh?

Nếu bạn làm MLM theo cách truyền thống:
- Lập danh sách 100 người quen -> Bạn bè xa lánh, người thân nghi ngờ.
- Mời cà phê, gọi điện thoại chèo kéo -> Mệt mỏi, tốn kém, tỷ lệ từ chối 95%.
- Tuyển được F1 vào nhưng không biết dạy họ làm gì -> F1 nản chí rồi bỏ cuộc.

**Phễu Tuyển F1 Tự Động (Lấy cảm hứng từ phansyminhhoang.com) đảo ngược hoàn toàn cuộc chơi:**
1. **Đứng ở vị thế Chuyên Gia / Trao Cơ Hội:** Bạn không đi "xin" ai vào làm việc cùng mình. Bạn tổ chức một buổi chia sẻ / workshop thử thách 2 ngày chuyển giao công nghệ.
2. **Hút đúng tệp ứng viên "nóng":** Những người xem trang này là những người đang khát khao kiếm tiền, mẹ bỉm sữa, dân văn phòng chán việc, hoặc những người từng làm hệ thống khác nhưng đang bế tắc.
3. **Phân loại ứng viên ngay từ Form:** 
   - Ứng viên phải khai báo: *Họ tên, Số điện thoại (Zalo), Tình trạng kinh nghiệm (Đang làm MLM, Thất bại trước đó, hay Người mới), Mục tiêu thu nhập.*
   - Giúp bạn biết chính xác "nỗi đau" của họ trước khi nhấc máy gọi điện tư vấn.
4. **Quà tặng khổng lồ giữ chân F1:** Trao cho họ phễu làm sẵn, kịch bản video ngắn 365 ngày và quy trình nhân bản. F1 thấy vào đội nhóm của bạn có sẵn "vũ khí", họ sẽ tự tin gia nhập ngay lập tức.

---

## 🚀 2. Cách Xem & Sử Dụng Website

1. Vào thư mục `d:\antigravity` trên máy tính.
2. **Click đúp vào file `index.html`** để mở trang web trên trình duyệt.
3. **Thử nghiệm:**
   - Bấm vào nút **"ĐĂNG KÝ HÚT F1 TỰ ĐỘNG NGAY"**
   - Điền tên, số điện thoại, chọn tình trạng kinh nghiệm và mục tiêu thu nhập -> Bấm Xác nhận.
   - Bấm `F12` trên bàn phím -> Chọn tab **Console** -> Gõ lệnh:
     ```javascript
     console.table(JSON.parse(localStorage.getItem('mlm_f1_leads')))
     ```
     Bạn sẽ thấy danh sách ứng viên F1 được lưu lại chi tiết kèm ngày giờ!

---

## ✏️ 3. Các Phần Bạn Có Thể Tùy Biến Thêm

Mở file [index.html](file:///d:/antigravity/index.html) bằng Notepad hoặc VS Code:

- **Tên của bạn & Ảnh cá nhân:**
  - Tìm `LEADER HỆ THỐNG THỰC CHIẾN` và thay bằng Tên thật / Danh xưng thương hiệu của bạn (Ví dụ: *Nguyễn Văn A - Thủ Lĩnh Hệ Thống Diamond*).
  - Thay ảnh đại diện ở thẻ `<img src="...">` bằng link ảnh chân dung uy tín của bạn.
- **Link Video giới thiệu (VSL):**
  - Tìm `id="videoIframe"` để thay link video YouTube nói về cơ hội kinh doanh / đội nhóm của bạn.
- **Tên công ty / Dự án (Tùy chọn):**
  - *Mẹo đỉnh cao của Attraction Marketing:* Đừng vội nêu tên công ty MLM quá sớm trên trang chủ. Hãy tập trung bán **"GIẢI PHÁP HÚT F1 & ĐỘI NHÓM ĐỒNG HÀNH"**, sau đó khi họ vào Zoom hoặc Zalo, bạn mới chia sẻ về sản phẩm/công ty thì tỷ lệ chốt sale sẽ cao gấp 5 lần!

---

## 📲 4. Kết Nối Bắn Thông Báo F1 Về Google Sheet / Telegram

Nếu bạn muốn khi ứng viên vừa bấm đăng ký, chuông điện thoại bạn reo lên và thông tin tự nhảy vào Google Sheet hoặc Telegram:
1. Tạo 1 Google Sheet để lưu danh sách F1.
2. Dùng tiện ích mở rộng **Google Apps Script** để tạo 1 Webhook URL.
3. Trong file `index.html`, tại hàm `handleFormSubmit(e)`, bổ sung lệnh gửi dữ liệu về Webhook. Ban tổ chức có thể hỗ trợ bạn kết nối này trong 5 phút!
