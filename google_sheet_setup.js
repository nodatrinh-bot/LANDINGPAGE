// =========================================================================
// MÃ GOOGLE APPS SCRIPT ĐỂ TỰ ĐỘNG GHI DỮ LIỆU F1 VÀO GOOGLE SHEETS
// =========================================================================
// HƯỚNG DẪN 3 BƯỚC ĐƠN GIẢN:
// 
// BƯỚC 1: Truy cập trang https://sheets.new để tạo một file Google Sheet mới.
//         - Đổi tên file thành: "DANH SÁCH ỨNG VIÊN F1 - TRINH CANARY"
//         - Tại dòng 1 (Tiêu đề cột), gõ:
//           Cột A: Thời Gian
//           Cột B: Họ Và Tên
//           Cột C: Số Điện Thoại
//           Cột D: Kinh Nghiệm
//           Cột E: Mục Tiêu Thu Nhập
//           Cột F: Nguồn Đăng Ký
//
// BƯỚC 2: Trên thanh menu của Google Sheet, bấm vào:
//         -> "Tiện ích mở rộng" (Extensions)
//         -> "Apps Script"
//         - Xóa hết mã cũ trong đó và DÁN TOÀN BỘ ĐOẠN CODE DƯỚI ĐÂY VÀO:

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Ghi một dòng mới vào Google Sheet
    sheet.appendRow([
      new Date(),
      data.name || '',
      "'" + (data.phone || ''), // Thêm dấu ' để không bị mất số 0 ở đầu số điện thoại
      data.experience || '',
      data.targetIncome || '',
      data.source || 'Website Trinh Canary'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// BƯỚC 3: LẤY ĐƯỜNG LINK WEB APP:
//         - Ở góc trên bên phải trang Apps Script, bấm nút màu xanh "Triển khai" (Deploy)
//         -> Chọn "Tùy chọn triển khai mới" (New deployment)
//         -> Bấm icon bánh răng bên cạnh "Chọn loại", chọn "Ứng dụng web" (Web app)
//         -> Mục "Người có quyền truy cập" (Who has access): Chọn "Bất kỳ ai" (Anyone) -> RẤT QUAN TRỌNG!
//         -> Bấm nút "Triển khai" (Deploy). Cấp quyền truy cập cho tài khoản Google của bạn.
//         -> Sao chép (Copy) đường link "URL của ứng dụng web" (có đuôi /exec).
//
// BƯỚC 4: Dán đường link vừa copy vào biến GOOGLE_SHEET_WEBAPP_URL trong file index.html!
