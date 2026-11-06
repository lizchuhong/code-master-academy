/* Original teaching notes and simulated cases aligned with ISTQB CTFL v4.0.1. */
(function () {
  'use strict';

  const ctfl = 'https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf';
  const sources = {
    sql: ['PostgreSQL · SQL tutorial', 'https://www.postgresql.org/docs/current/tutorial-sql.html'],
    http: ['IETF · RFC 9110 HTTP Semantics', 'https://www.rfc-editor.org/rfc/rfc9110.html'],
    postman: ['Postman · Write post-response scripts', 'https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/'],
    newman: ['Postman · Newman and its reporters', 'https://learning.postman.com/docs/reference/newman-cli/command-line-integration-with-newman/'],
    owasp: ['OWASP · API Security Top 10', 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/'],
    load: ['Apache JMeter · Thread Group and reports', 'https://jmeter.apache.org/usermanual/component_reference.html#Thread_Group'],
    playwright: ['Playwright · Auto-waiting and assertions', 'https://playwright.dev/docs/actionability'],
    pom: ['Playwright · Page object models', 'https://playwright.dev/docs/pom'],
    ci: ['GitHub · Workflow syntax for GitHub Actions', 'https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions'],
    napas: ['NAPAS · Dịch vụ chuyển tiền nhanh', 'https://napas.com.vn/dich-vu-chuyen-tien-nhanh']
  };
  const note = text => ({ type: 'Paragraph', text });
  const heading = text => ({ type: 'Heading 3', text });
  const snippet = text => ({ type: 'Code Block', text });
  const table = (...rows) => ({ type: 'table', rows });
  const blocks = topics => topics.flatMap(([title, detail]) =>
    [heading(title), ...[detail].flat().map(value => typeof value === 'string' ? note(value) : value)]);
  const lesson = (reference, theory, example, review, practice, extra = []) =>
    ({ reference, theory, example, review, practice, extra });

  const lessons = {
    QA1D1: lesson('§1.1–1.3, §5.5 · FL-1.2.3, FL-5.5.1', [
      ['Testing, QA và debugging', 'Testing thu thập bằng chứng về chất lượng và rủi ro của sản phẩm. Có thể review đặc tả trước khi có build hoặc chạy chương trình với dữ liệu thử. QA hướng vào cải thiện quy trình để phòng lỗi. Khi một phép thử cho thấy failure, debugging tái hiện, chẩn đoán và xử lý nguyên nhân. Sau bản sửa, chạy confirmation test để xác nhận lỗi cũ đã được xử lý, rồi chọn regression test cho vùng có thể bị ảnh hưởng.'],
      ['Error → defect → failure', 'Giả sử lập trình viên đọc nhầm ranh giới tối thiểu (error) và viết điều kiện chấp nhận số tiền bằng 0 (defect). Khi người thử nhập 0 và màn hình mở bước xác nhận, đó là failure quan sát được. Root cause có thể là quy tắc viết mơ hồ hoặc thiếu review, cần điều tra. Bug report ghi nhận bằng chứng và mức độ tái hiện trước khi nhóm kết luận nguyên nhân.'],
      ['Các nguyên tắc giúp ưu tiên kiểm thử', 'Test cho thấy lỗi có mặt và vẫn còn rủi ro sau khi test pass. Kiểm hết tổ hợp thường bất khả thi, nên test sớm và ưu tiên khu vực có nhiều lỗi hoặc rủi ro cao. Thay đổi dữ liệu khi bộ test cũ mất khả năng phát hiện lỗi mới. Cách test phụ thuộc bối cảnh, và sản phẩm ít defect vẫn có thể thất bại nếu giải quyết sai nhu cầu.'],
      ['Một báo cáo để người khác hành động', 'Nêu màn hình, điều kiện và hiện tượng ngay trong tiêu đề. Ghi môi trường, build, tiền điều kiện, dữ liệu, bước tái hiện, expected result gắn yêu cầu, actual result, tần suất và bằng chứng. Severity là mức tác động, priority là mức cần xử lý theo kế hoạch. Khi triage, nhóm xác nhận báo cáo, phân loại và quyết định xử lý. Dùng dữ liệu giả và che dữ liệu cá nhân trong bằng chứng.']
    ], [
      ['Ví dụ · Số tiền bằng 0', 'Quy tắc TRF-01 của môi trường giả lập yêu cầu chặn giá trị 0 VND ở màn nhập tiền. Mở chuyển tiền, chọn tài khoản A và người nhận B hợp lệ, nhập 0 VND, bấm Tiếp tục. Expected là hiện lỗi dưới ô số tiền và giữ ở màn nhập. Actual là vào màn xác nhận. Tiêu đề phù hợp là “[Chuyển tiền][0 VND] Mở bước xác nhận khi số tiền không hợp lệ”.'],
      ['Chọn đúng bằng chứng', 'Một video ngắn chứng minh lỗi điều hướng. Chỉ kết luận hệ thống tạo hoặc ghi sổ giao dịch khi có mã giao dịch hoặc bằng chứng từ lớp tương ứng. Khi thử lại bản sửa, dùng đúng 0 VND để confirmation, rồi kiểm tra một số tiền hợp lệ để regression.']
    ], [
      ['Mẫu báo cáo cho đề eKYC', 'Tiêu đề “[eKYC][Mật khẩu 123456] Màn hình Đăng ký loading và không hiện lỗi mật khẩu”. Tiền điều kiện là đã đến bước tạo mật khẩu trên web thử nghiệm. Bước 1 nhập 123456. Bước 2 bấm Đăng ký. Expected là báo lỗi dưới ô theo yêu cầu tối thiểu 8 ký tự và các nhóm ký tự. Actual là không thấy lỗi và màn hình loading.'],
      ['Tự kiểm tra', 'Môi trường đã biết là web Mobile Banking giả lập. Build, trình duyệt, thời gian loading và tần suất tái hiện chưa được cho. Đính kèm video có dữ liệu thử và xác minh lại trên build đã xác định. Đề bài chưa có bằng chứng tài khoản được tạo.']
    ]),
    QA1D2: lesson('§1.4, §4.5.2–4.5.3 · FL-1.4.1, FL-1.4.4, FL-4.5.2', [
      ['Từ yêu cầu đến test case', 'Test basis là nơi lấy quy tắc, ví dụ acceptance criteria. Test analysis xác định điều kiện cần kiểm tra như “tài khoản bị khóa”. Test design chọn dữ liệu và expected result. Test implementation chuẩn bị tài khoản, quy trình chạy và bộ test. Test execution ghi actual result rồi so với expected. Planning, monitoring/control và completion quản lý công việc xuyên suốt.'],
      ['Một case đủ để chạy lại', 'Đặt ID, liên kết quy tắc, ghi trạng thái tài khoản, input cụ thể, bước thao tác và kết quả thấy được. Expected phải quan sát được ở UI, response hoặc trạng thái ứng dụng phù hợp với yêu cầu. Actual và Pass/Fail ghi sau khi chạy. SMART là cách ghi mục tiêu rõ và đo được trong bài này. Traceability giúp biết một yêu cầu có case nào, kết quả nào và defect nào liên quan.'],
      ['Ai tham gia kiểm thử?', 'Vai trò quản lý kiểm thử tập trung vào kế hoạch, giám sát và điều chỉnh. Vai trò kiểm thử tập trung vào phân tích, thiết kế, chuẩn bị và chạy test. Nhiều thành viên có thể cùng làm khi có năng lực phù hợp. Độc lập giúp thêm góc nhìn, đồng thời cần trao đổi thường xuyên để hiểu đúng nghiệp vụ và phối hợp sửa lỗi.'],
      ['Viết acceptance criteria có thể kiểm chứng', 'Given là tiền điều kiện, When là hành động, Then là hành vi có thể kiểm tra. Ví dụ Given tài khoản đang bị khóa, When gửi thông tin đúng, Then ứng dụng từ chối tạo phiên. Trong ATDD, BA, dev và QA thống nhất ví dụ chấp nhận trước khi triển khai. Làm rõ câu chữ mơ hồ như “xử lý lỗi hợp lý” trước khi lấy làm expected.']
    ], [
      ['Ví dụ · Một case hoàn chỉnh', 'TC-LOGIN-02 liên kết AC-LOGIN-02. Tài khoản A tồn tại, đang hoạt động, phiên chưa đăng nhập. Nhập đúng user A và mật khẩu sai thử nghiệm. Bấm Đăng nhập. Expected là hiện thông báo xác thực thất bại theo đặc tả, vẫn ở màn đăng nhập và không có phiên mới. Nếu chạy thật, ghi build, thời điểm và kết quả quan sát trước khi đánh dấu.'],
      ['Tách hai lý do thất bại', 'Password sai và tài khoản khóa đều có thể từ chối truy cập nhưng dùng tiền điều kiện khác nhau. Dùng mật khẩu đúng cho case khóa để không đánh trượt vì lý do sai mật khẩu. Nếu thông báo chung nhằm tránh lộ trạng thái tài khoản, kiểm theo chính sách của bài.']
    ], [
      ['Bộ năm case tối thiểu', table(
        ['ID', 'Điều kiện và input', 'Kết quả theo đặc tả bài'],
        ['TC01', 'Tài khoản active, user và mật khẩu đúng', 'Tạo phiên và mở trang tài khoản'],
        ['TC02', 'Active, đúng user, sai mật khẩu', 'Từ chối xác thực, không tạo phiên'],
        ['TC03', 'Trống tên đăng nhập, mật khẩu đã nhập', 'Báo ô bắt buộc và chặn gửi'],
        ['TC04', 'Tên đăng nhập đã nhập, trống mật khẩu', 'Báo ô bắt buộc và chặn gửi'],
        ['TC05', 'Tài khoản locked, thông tin đúng', 'Từ chối truy cập và không tạo phiên']
      )],
      ['Tiêu chí đạt', 'Mỗi case có tiền điều kiện, dữ liệu, thao tác, expected và ID quy tắc. Chỉ ghi Pass/Fail khi có actual. Nếu cần test thêm, thử tài khoản không tồn tại theo đặc tả phản hồi, rồi xem có cần kiểm tra khóa sau nhiều lần sai trong phạm vi khác.']
    ], 'Đặc tả giả lập AC-LOGIN. Active và đúng thông tin → mở trang tài khoản. Sai mật khẩu hoặc tài khoản locked → từ chối và không tạo phiên. Thiếu một trường bắt buộc → báo lỗi tại trường đó và chặn gửi. Viết 5 test case gồm valid, sai mật khẩu, thiếu username, thiếu password và locked.'),
    QA1D3: lesson('§3.1, §4.2.3 · FL-3.1.3, FL-4.2.3', [
      ['Review yêu cầu trước khi chạy chương trình', 'BRD thường ghi nhu cầu nghiệp vụ, SRS/đặc tả mô tả hành vi của hệ thống. Dùng bản và mục đã xác nhận làm test basis. Khi đọc quy tắc, đánh dấu điều kiện, hành động, đơn vị và chỗ còn thiếu. Ví dụ cần hỏi kỳ hạn là số tháng nguyên hay ngày quy đổi, và mức cộng 0,2 là điểm phần trăm hay phần trăm của mức cơ sở. Review trực tiếp văn bản là static testing.'],
      ['Từ câu điều kiện sang decision table', 'Đặt các điều kiện thành hàng và mỗi tổ hợp khả thi thành một cột quy tắc, hoặc xoay bảng để dễ đọc. Trong bài, xét kỳ hạn dưới 6 tháng, số tiền dưới 100 triệu và khách VIP. Với kỳ hạn ngắn, số tiền không ảnh hưởng kết quả nên có thể gộp thành “bất kỳ”. Tổ hợp bất khả thi và điều kiện không ảnh hưởng là hai trường hợp khác nhau.'],
      ['Bao phủ và dữ liệu', 'Chọn ít nhất một ca cho mỗi quy tắc khả thi của bảng đã xác nhận. Coverage tính số quy tắc được test chia cho số quy tắc khả thi. Để bắt lỗi ở ngưỡng, thêm dữ liệu sát 6 tháng và 100 triệu bằng BVA. Dữ liệu sai định dạng, kỳ hạn âm và số tiền âm là các rule validation riêng nếu đặc tả quy định.']
    ], [
      ['Ví dụ · Lãi suất mẫu', 'Kỳ hạn 9 tháng, 80 triệu, VIP thuộc nhóm kỳ hạn dài và tiền thấp. Mức cơ sở 6,0%/năm cộng 0,2 điểm phần trăm ra 6,2%/năm. Với 4 tháng và 180 triệu, quy tắc kỳ hạn ngắn giữ mức 4,0% trước phần cộng VIP. Đây là cách lập expected theo rule, chưa phải phép tính tiền lãi thực nhận.']
    ], [
      ['Sáu quy tắc rút gọn', table(
        ['Kỳ hạn (tháng)', 'Số tiền', 'Thường', 'VIP'],
        ['Dưới 6', 'Bất kỳ số tiền hợp lệ', '4,0%', '4,2%'],
        ['Từ 6', 'Dưới 100 triệu', '6,0%', '6,2%'],
        ['Từ 6', 'Từ 100 triệu', '6,5%', '6,7%']
      )],
      ['Kiểm tra ranh giới', 'Ba hàng × hai hạng cho 6 kết quả. Bộ ví dụ có thể dùng 5 tháng/80 triệu, 6 tháng/99.999.999 VND và 6 tháng/100.000.000 VND cho cả hai hạng. Nếu 6/6 quy tắc được chạy thì đạt 100% coverage theo bảng rút gọn. Vẫn cần test giá trị quanh ngưỡng và các quy tắc validation khác nếu có.']
    ], 'Đặc tả lãi suất giả lập. Kỳ hạn dưới 6 tháng: 4,0%/năm. Từ 6 tháng và dưới 100 triệu VND: 6,0%. Từ 6 tháng và từ 100 triệu VND: 6,5%. VIP cộng 0,2 điểm phần trăm ở mọi mức. Lập bảng quy tắc và viết case cho mỗi tổ hợp khả thi.'),
    QA1D4: lesson('§4.2.1–4.2.2 · FL-4.2.1, FL-4.2.2', [
      ['Equivalence partitioning (EP)', 'Chia miền dữ liệu thành các nhóm không chồng lấn với cách xử lý dự kiến giống nhau trong từng nhóm. Với số tiền nguyên và khoảng đóng [min, max], có vùng dưới min, trong khoảng và trên max. Một giá trị đại diện mỗi vùng kiểm tra việc phân loại. Nếu yêu cầu quy định rỗng hoặc ký tự sai, đó là các phân vùng input khác.'],
      ['Boundary value analysis (BVA)', 'BVA áp dụng cho các phân vùng có thứ tự. Với bước 1 VND, 2-value BVA chọn ranh giới và giá trị kề ở phân vùng đối diện, ví dụ min−1 và min. 3-value BVA thêm giá trị kề còn lại, ví dụ min−1, min, min+1. Tại max làm tương tự. Với đơn vị có hai chữ số lẻ, phải dùng bước nhỏ nhất hợp lệ của bài, không mặc định ±1 đơn vị.'],
      ['Expected và coverage', 'Ghi rõ số nào được chấp nhận, số nào bị từ chối và hệ thống dừng ở bước nào. EP coverage đếm phân vùng đã chạy trên tổng phân vùng đã xác định. BVA coverage đếm điểm thuộc bộ giá trị biên đã thử trên tổng điểm trong bộ. Giữ tiền điều kiện khác hợp lệ để một lỗi không che lỗi của input đang thử.']
    ], [
      ['Ví dụ · Khoảng 50–500 điểm', table(
        ['Dữ liệu', 'Chọn vì', 'Expected'],
        ['49, 50, 51', 'Biên dưới và hai láng giềng', 'Từ chối / nhận / nhận'],
        ['499, 500, 501', 'Biên trên và hai láng giềng', 'Nhận / nhận / từ chối'],
        ['200', 'Đại diện phần trong khoảng', 'Nhận']
      )]
    ], [
      ['Đáp án theo đặc tả giả lập', 'EP có thể chọn 5.000 VND (dưới), 50.000 VND (trong) và 600.000.000 VND (trên). Bộ BVA 2-value là 9.999, 10.000, 500.000.000, 500.000.001. Bộ 3-value thêm 10.001 và 499.999.999. Giá trị trong khoảng đi tiếp, hai giá trị ngoài khoảng báo lỗi và giữ ở màn nhập.'],
      ['Phân biệt hạn mức', 'Hạn mức mỗi giao dịch khác hạn mức cộng dồn trong ngày. Nếu một giao dịch hợp lệ bị từ chối vì tổng ngày, đó là case của quy tắc khác. Các số trong bài chỉ mô phỏng và không dùng để suy ra hạn mức hiện hành.']
    ], 'Đặc tả lab: Chuyển tiền 24/7 giả lập cho phép số tiền nguyên từ 10.000 đến 500.000.000 VND mỗi giao dịch, gồm hai đầu. Ngoài khoảng: báo lỗi ở ô số tiền và không chuyển bước. Xác định phân vùng EP, bộ BVA 2-value và 3-value, ghi expected cho từng giá trị.'),
    QA1D5: lesson('§4.2.4 · FL-4.2.4', [
      ['Mô hình state–event–guard–action', 'State là trạng thái của đối tượng, event là việc xảy ra, guard là điều kiện cho phép, action là phản ứng hoặc cập nhật. Cùng một event có thể cho kết quả khác khi state đổi. Ví dụ giao dịch có thể được phép khi thẻ Active và bị chặn khi Locked dù input giống nhau.'],
      ['Từ mô hình sang case', 'Dùng bảng có cột trạng thái hiện tại, event/guard, trạng thái sau và kết quả quan sát. Mỗi test có đường đưa đối tượng đến state ban đầu, thực hiện một event cần kiểm tra, rồi đọc lại trạng thái. Với chuỗi PIN sai, thử 2 lần, lần thứ 3 và yêu cầu sau khóa. Bắt đầu mỗi case với bộ đếm đúng tiền điều kiện.'],
      ['Ba mức bao phủ', 'All states đi qua mọi trạng thái. Valid transitions đi qua mỗi chuyển tiếp hợp lệ. All transitions còn thử các cặp state/event không hợp lệ đã xác định. Tách từng invalid transition khi cần để lỗi bị chặn đầu tiên không che lỗi khác. Chỉ kết luận theo mô hình đã được duyệt, như có hay không luồng mở khóa.']
    ], [
      ['Ví dụ · Mô hình thẻ lab', table(
        ['State ban đầu', 'Event hoặc guard', 'State sau', 'Bằng chứng'],
        ['New', 'Kích hoạt hợp lệ', 'Active', 'Thông báo và trạng thái cập nhật'],
        ['Active', 'PIN sai lần 2', 'Active', 'Bộ đếm = 2'],
        ['Active', 'PIN sai lần 3 liên tiếp', 'Locked', 'Chặn giao dịch, trạng thái Locked'],
        ['Locked', 'Giao dịch bằng thẻ', 'Locked', 'Từ chối, không ghi sổ'],
        ['Locked', 'Yêu cầu đóng thẻ hợp lệ', 'Closed', 'Trạng thái Closed'],
        ['Closed', 'Kích hoạt lại', 'Closed', 'Từ chối yêu cầu']
      )]
    ], [
      ['Một ca phải nói được điều gì', 'Case ST-03 chuẩn bị thẻ Active với hai lần sai liên tiếp, nhập PIN sai lần 3, kỳ vọng Locked. Case ST-04 chuẩn bị một thẻ Locked, thử giao dịch, kỳ vọng từ chối và trạng thái giữ Locked. Xem lại từng dòng valid/invalid của bảng để biết coverage, thay vì chỉ đếm thẻ ở bốn trạng thái.']
    ], 'Lab thẻ ghi nợ: New kích hoạt hợp lệ → Active. Sai PIN lần 3 liên tiếp → Locked. Yêu cầu đóng hợp lệ từ Locked → Closed. Locked từ chối giao dịch và Closed từ chối kích hoạt lại. Vẽ bảng trạng thái, rồi viết case cho luồng hợp lệ và luồng bị chặn.'),
    QA2D1: lesson('§4.4, §5.2.4 · FL-4.4.1–4.4.3', [
      ['Luồng thay thế và ngoại lệ', 'Luồng thay thế có thể hợp lệ, ví dụ chọn nguồn tiền khác trước xác nhận. Ngoại lệ là điều kiện làm luồng chính không hoàn tất theo dự kiến, ví dụ mất mạng. Xác định thời điểm lỗi: trước khi gửi, sau khi máy chủ nhận, hoặc sau khi ghi sổ nhưng trước phản hồi. Cùng một thông báo timeout có thể che ba trạng thái khác nhau.'],
      ['Áp dụng kỹ thuật theo kinh nghiệm', 'Error guessing dùng các lỗi quen thuộc như bấm hai lần, hết token hoặc thiếu trường. Checklist-based testing dùng danh sách kiểm nhất quán qua nhiều build. Exploratory testing đặt một mục tiêu, khung thời gian và cách ghi lại phát hiện, đồng thời điều chỉnh bước thử theo dấu hiệu mới. Ví dụ charter 20 phút kiểm tra mất kết nối tại các điểm trước và sau gửi của lab thanh toán.'],
      ['Nguồn để xác nhận kết quả', 'Test oracle là thông tin dùng để quyết định expected, ví dụ hợp đồng API và trạng thái ledger trong môi trường thử. Sau lỗi mạng, tra theo mã giao dịch hoặc tham chiếu lệnh đã lưu. Với retry có hỗ trợ chống lặp, thử lại cùng tham chiếu theo hợp đồng. Nếu chưa có trạng thái đáng tin, giữ kết luận “chưa xác định” và chuyển sang đối soát.']
    ], [
      ['Ví dụ · Mất phản hồi sau khi gửi', 'Hệ thống giả lập đã tạo TX-42 nhưng điện thoại mất kết nối trước phản hồi. Khi mở lại, tra TX-42 thấy thành công và đúng một bút toán. So sánh với case rớt mạng trước khi gửi, nơi tra tham chiếu chưa có lệnh. Tách dữ liệu và mốc thời gian để hai case tái hiện được.']
    ], [
      ['Sáu kịch bản có đầu ra kiểm được', 'Một bộ lab có thể gồm (1) mã hóa đơn không tồn tại → từ chối trước xác nhận, (2) hết phiên trước gửi → yêu cầu xác thực lại, (3) thiếu số dư → từ chối, (4) mất mạng trước gửi → kiểm chưa tạo lệnh, (5) timeout sau gửi → tra trạng thái và kiểm một bút toán tối đa, (6) bấm xác nhận hai lần → đối chiếu cơ chế chống trùng. Gắn từng expected với quy tắc của lab và chỉ rõ tầng kiểm.']
    ]),
    QA2D2: lesson('§4.1, §4.3, §5.2 · FL-4.3.1–4.3.3, FL-5.2.3', [
      ['Từ mind map đến coverage', 'Mind map là cách tổ chức ý tưởng. Mỗi nhánh nên có điều kiện có thể kiểm, ID yêu cầu, rủi ro và dữ liệu. Với QR, tách đọc mã, xác nhận người nhận, xác thực quyền, ghi sổ, phản hồi và tra cứu. Chọn kỹ thuật theo loại quy tắc: EP cho format mã, state transition cho vòng đời lệnh, decision table cho điều kiện kết hợp.'],
      ['Black-box và white-box đo những gì', 'Black-box lấy test từ hành vi đã mô tả. White-box lấy từ cấu trúc thực thi. Trong đoạn giả mã “result = declined; if approved: result = accepted; return result”, một ca approved=true có thể chạy mọi statement nhưng bỏ nhánh false. Thêm approved=false mới đi qua cả hai nhánh. Coverage cao ở code vẫn có thể bỏ sót một yêu cầu chưa được viết vào chương trình.'],
      ['Ưu tiên rủi ro', 'Xem khả năng xảy ra và mức tác động. Một case chuyển nhầm người nhận có tác động khác một nhãn chữ lệch. Khi chỉ viết 3 case, chọn ca đi đủ luồng, ca chặn sai người nhận/dữ liệu và ca nguy cơ ghi sổ hai lần. Ghi rõ phần hoãn và lý do để người đọc thấy giới hạn bộ test.']
    ], [
      ['Ví dụ · Nhánh dữ liệu QR', 'Mã chuẩn giải ra người nhận B, mã sai cấu trúc bị từ chối trước khi tạo lệnh, và mã chuẩn nhưng người nhận không còn hoạt động cần rule riêng. Với từng nhánh, kiểm màn xác nhận hiển thị đúng người và số tiền theo dữ liệu thử, sau đó kiểm mã tham chiếu và trạng thái.']
    ], [
      ['Mẫu bộ 3 ưu tiên', 'QR hợp lệ, đủ tiền, xác nhận một lần → hiển thị đúng B và chỉ một giao dịch. QR hỏng → từ chối đọc, không tạo lệnh. Timeout sau xác nhận → tra tham chiếu, retry theo rule lab, xác minh không trùng bút toán. Bản mind map tốt còn nêu quyền, hạn mức, dữ liệu người nhận, timeout và lịch sử.'],
      ['Tự kiểm tra phạm vi', 'Đánh dấu rule nào phủ được bằng 3 case và rule nào cần case sau. Số case không thay thế phần trăm coverage của kỹ thuật đã chọn.']
    ]),
    QA2D3: lesson('§1.4.3–1.4.4 · test data và bằng chứng · thực hành SQL bổ sung', [
      ['Đọc một truy vấn theo thứ tự logic', 'FROM xác định bảng, WHERE chọn dòng, SELECT chọn cột, ORDER BY sắp xếp kết quả rồi LIMIT giới hạn số dòng. Dấu > loại giá trị đúng bằng ngưỡng. NULL trong điều kiện so sánh thông thường cho kết quả chưa xác định, nên dùng IS NULL khi cần tìm giá trị thiếu. DISTINCT có thể che dữ liệu trùng, chỉ dùng khi yêu cầu cần giá trị duy nhất.'],
      ['“Hôm nay” phải có mốc', 'Chốt timezone của ngày nghiệp vụ và cột created_at đang lưu kiểu gì. Dùng khoảng nửa mở [đầu ngày, đầu ngày kế tiếp) để không sót phần lẻ của giây và không kéo nhầm đúng 00:00 ngày sau. Các ví dụ SQL dùng ngày cố định và giả định timestamp đã cùng timezone.'],
      ['Năm dòng gần nhất cần thứ tự xác định', 'Sắp xếp created_at DESC và dùng trans_id DESC làm tie-breaker ổn định nếu hai giao dịch cùng thời điểm. Giữ số tài khoản dưới dạng text để không mất số 0 đầu. Dữ liệu phòng SQL dùng ngày giả lập 10/01/2026.']
    ], [
      ['Ví dụ · Lấy ba dòng PENDING của ngày lab', snippet("SELECT trans_id, amount, created_at\nFROM transactions\nWHERE status = 'PENDING'\n  AND created_at >= '2026-01-10 00:00:00'\n  AND created_at <  '2026-01-11 00:00:00'\nORDER BY created_at DESC, trans_id DESC\nLIMIT 3;")]
    ], [
      ['Mẫu truy vấn cho hai yêu cầu', [
        snippet("SELECT trans_id, account_no, amount, created_at\nFROM transactions\nWHERE status = 'SUCCESS' AND amount > 10000000\n  AND created_at >= '2026-01-10 00:00:00'\n  AND created_at <  '2026-01-11 00:00:00';\n\nSELECT trans_id, amount, status, created_at\nFROM transactions\nWHERE account_no = '1029384756'\nORDER BY created_at DESC, trans_id DESC\nLIMIT 5;"),
        'Thay hai mốc bằng đầu và cuối ngày cần kiểm. Seed một dòng đúng 10 triệu, một dòng cao hơn và một dòng ngay 00:00 ngày sau để tự kiểm kết quả.'
      ]]
    ], [
        'Bảng transactions trong phòng SQL dùng timestamp cùng múi giờ. Dùng ngày giả lập 10/01/2026.',
        'Lấy giao dịch SUCCESS có amount lớn hơn 10.000.000 VND trong ngày giả lập.',
        'Lấy 5 giao dịch gần nhất của tài khoản mẫu 1029384756. Ghi cách xử lý khi trùng thời điểm.'
    ], ['sql']),
    QA2D4: lesson('§1.4.3–1.4.4 · dữ liệu và truy vết · thực hành JOIN bổ sung', [
      ['Xác định số dòng mong đợi', 'Grain của kết quả là một dòng cho mỗi giao dịch thất bại. transactions.account_no ghép accounts.account_no, rồi accounts.customer_id ghép customers.customer_id. Nếu account_no và customer_id là khóa duy nhất ở bảng cha, mỗi giao dịch sẽ chỉ khớp tối đa một dòng cha ở mỗi bước. Kiểm ràng buộc khóa trước khi dựa vào số dòng.'],
      ['INNER JOIN và LEFT JOIN', 'INNER JOIN giữ các giao dịch có dữ liệu khớp đủ cả hai bảng. LEFT JOIN giữ giao dịch dù mất thông tin bảng cha, trả NULL ở cột chưa khớp. Để tìm orphan, đặt điều kiện giao dịch ở bảng t và dùng a.account_no IS NULL sau LEFT JOIN. Đặt lọc cột bảng phải vào WHERE có thể loại dòng NULL mà bạn muốn giữ.'],
      ['Điều tra dòng nhân đôi', 'Hai giao dịch khác nhau của cùng tài khoản tạo hai dòng hợp lệ. Cùng trans_id lặp lại sau JOIN báo khả năng join sai khóa hoặc bảng cha có nhiều bản ghi cùng khóa dự kiến. Kiểm COUNT(*) theo trans_id trước khi thêm DISTINCT. Với dữ liệu cá nhân, chỉ chọn cột cần cho case và che số điện thoại trong báo cáo.']
    ], [
      ['Ví dụ · Tìm giao dịch không có tài khoản khớp', snippet("SELECT t.trans_id\nFROM transactions t\nLEFT JOIN accounts a ON a.account_no = t.account_no\nWHERE t.status = 'FAILED' AND a.account_no IS NULL;")]
    ], [
      ['Đáp án JOIN ba bảng', [
        snippet("SELECT c.full_name, c.phone_number, a.account_no, t.amount\nFROM transactions t\nJOIN accounts a ON a.account_no = t.account_no\nJOIN customers c ON c.customer_id = a.customer_id\nWHERE t.status = 'FAILED';"),
        'Trong môi trường test, thêm t.trans_id để đối chiếu từng dòng. Seed hai giao dịch thất bại của cùng tài khoản và một giao dịch thành công. Kỳ vọng có hai dòng với đúng số tiền.'
      ]]
    ], undefined, ['sql']),
    QA2D5: lesson('§1.4.4, §5.3.1 · bằng chứng kiểm thử · thực hành aggregate bổ sung', [
      ['Lọc trước và sau khi nhóm', 'WHERE chọn giao dịch SUCCESS trong cửa sổ ngày cần kiểm. GROUP BY account_no tạo một nhóm cho mỗi tài khoản. COUNT(*) đếm dòng, COUNT(amount) bỏ giá trị amount NULL, và SUM(amount) cộng các giá trị có dữ liệu. HAVING lọc theo tổng của từng nhóm. Dùng > nếu yêu cầu nói “lớn hơn”, và >= nếu bao gồm đúng ngưỡng.'],
      ['Cùng phạm vi trước khi đối soát', 'Thống nhất mã trạng thái, currency, múi giờ, nguồn dữ liệu và loại giao dịch. Chỉ cộng các dòng VND nếu ngưỡng ghi bằng VND, hoặc dùng quy tắc quy đổi đã thống nhất. Bảng giao dịch và ledger có thể có grain khác nhau. Tổng số tiền từ hai nguồn khớp vẫn có thể che hai giao dịch lệch bù nhau. Kiểm tiếp theo trans_id khi cần.'],
      ['Mẫu dữ liệu kiểm truy vấn', 'Tạo nhóm A có SUCCESS 60 triệu và 45 triệu, nhóm B tổng đúng 100 triệu và thêm một FAILED 20 triệu. A phải xuất hiện với n=2 và total=105 triệu. B không xuất hiện. Thêm bản ghi ở đúng đầu ngày hôm sau để xác minh cửa sổ ngày.']
    ], [
      ['Ví dụ · Nhóm giao dịch PENDING cần theo dõi', snippet("SELECT account_no, COUNT(*) AS n, SUM(amount) AS total\nFROM transactions\nWHERE status = 'PENDING'\n  AND created_at >= '2026-01-09 00:00:00'\n  AND created_at <  '2026-01-10 00:00:00'\nGROUP BY account_no\nHAVING SUM(amount) >= 20000000;")]
    ], [
      ['Mẫu truy vấn cho ngày 10/01', snippet("SELECT account_no, COUNT(*) AS n, SUM(amount) AS total\nFROM transactions\nWHERE status = 'SUCCESS'\n  AND created_at >= '2026-01-10 00:00:00'\n  AND created_at <  '2026-01-11 00:00:00'\nGROUP BY account_no\nHAVING SUM(amount) > 100000000;")],
      ['Tiêu chí đối chiếu', 'Query chỉ gom dữ liệu trong ngày, chỉ đếm SUCCESS và dùng HAVING cho tổng. Chạy dữ liệu seed để chứng minh tài khoản đúng ngưỡng bị loại. Dùng biến thời gian ở môi trường thực hành để chạy ngày khác. Nếu schema chưa có currency, ghi giả định toàn bộ dòng VND trước khi đọc tổng.']
    ], 'Bảng lab transactions dùng toàn bộ VND, timestamp cùng múi giờ. Tính COUNT và SUM các giao dịch SUCCESS theo account_no trong ngày 10/01/2026. Chỉ hiện nhóm có tổng lớn hơn 100.000.000 VND.', ['sql']),
    QA3D1: lesson('§2.2.1–2.2.2 · kiểm thử tích hợp · thực hành HTTP bổ sung', [
      ['Đọc hợp đồng của request', 'Một request có method, URL, headers và đôi khi có body. Path chọn tài nguyên, query thường lọc hoặc phân trang, Content-Type mô tả body. Với JSON, tên trường và chuỗi dùng dấu ngoặc kép, amount số và amount chuỗi là hai kiểu khác. Đặc tả phải nói rõ trường bắt buộc, kiểu, đơn vị tiền và ràng buộc.'],
      ['Tách HTTP và trạng thái nghiệp vụ', 'HTTP 201 có thể xác nhận đã tạo tài nguyên lệnh, HTTP 202 có thể báo đã tiếp nhận xử lý. Một lệnh được tạo có thể đang PENDING. JSON status cho biết trạng thái nghiệp vụ theo hợp đồng, và trạng thái sau cùng cần tra cứu theo transactionId. Với 5xx hoặc mất phản hồi, kiểm trạng thái đã ghi trước khi retry.'],
      ['Thiết kế ma trận response', 'Lấy status code từ hợp đồng của endpoint. Các nhóm đáng thử gồm hợp lệ, sai cú pháp, payload không hợp lệ, thiếu xác thực, thiếu quyền, xung đột và sự cố server. Ghi riêng status, mã lỗi nghiệp vụ, schema và side effect. Kiểm mã lỗi ổn định cho máy đọc, nội dung UI hoặc ngôn ngữ có thể thay đổi.']
    ], [
      ['Ví dụ · API chuyển tiền giả lập', [
        snippet('POST /v1/transfers\nContent-Type: application/json\n\n{"fromAccount":"MOCK-A","toAccount":"MOCK-B","amount":100000,"currency":"VND"}\n\nHTTP/1.1 201 Created\nLocation: /v1/transfers/T001\nContent-Type: application/json\n\n{"transactionId":"T001","status":"PENDING"}'),
        'T001 là lệnh đã được tạo trong đặc tả bài. GET tài nguyên T001 để đọc trạng thái. Phòng API trong trình duyệt dùng route /banking/transfers và hợp đồng riêng để luyện đọc status, body và retry.'
      ]]
    ], [
      ['Checklist cho hợp đồng lab', table(
        ['Ca thử', 'HTTP giả lập', 'Điểm kiểm nghiệp vụ'],
        ['Payload đúng và có quyền', '201', 'Có transactionId, status PENDING, tạo đúng một lệnh'],
        ['JSON hỏng cú pháp', '400', 'Lỗi parse, không tạo lệnh'],
        ['Thiếu hoặc token không hợp lệ', '401', 'Không lộ dữ liệu lệnh'],
        ['Token hợp lệ nhưng không có quyền trên nguồn', '403', 'Từ chối và không ghi giao dịch'],
        ['Amount ngoài ràng buộc', '422', 'Lỗi validation theo hợp đồng lab'],
        ['Server lỗi sau gửi', '500', 'Tra cứu tham chiếu để xác định side effect']
      )]
    ], 'Dùng request và response POST /v1/transfers ở phần Học bài. Giải thích các thành phần và cách biết giao dịch đã hoàn tất. Viết checklist cho 201, 400, 401, 403, 422 và 500 theo hợp đồng giả lập, gồm điểm kiểm trạng thái và dữ liệu ngoài status code.', ['http']),
    QA3D2: lesson('§1.4.3, §2.2.1 · testware và tích hợp · thực hành Postman bổ sung', [
      ['Chuẩn bị một request có thể lặp lại', 'Đặt biến base_url trỏ đến máy chủ lab. Dùng method POST và đường dẫn /v1/auth/login. Trong Body chọn raw → JSON, gửi username và password theo hợp đồng. Kiểm Content-Type: application/json. Accept: application/json diễn đạt kiểu phản hồi mong muốn nếu endpoint dùng thương lượng nội dung.'],
      ['Tách endpoint login và request có xác thực', 'Login nhận thông tin xác thực theo thiết kế và trả access token. Dùng token trong Authorization: Bearer <token> ở endpoint bảo vệ tiếp theo nếu hợp đồng yêu cầu. Query params phục vụ lọc, ví dụ GET /v1/transfers?status=PENDING. Không đặt mật khẩu hoặc token vào URL.'],
      ['Dữ liệu thử và kiểm tra từng lớp', 'Dùng biến môi trường cho base URL và giá trị bí mật thử nghiệm, kiểm đúng environment đang được chọn. Thử body đúng, thiếu password, sai kiểu và sai thông tin xác thực. Kiểm response không chứa mật khẩu. Khi chia sẻ collection hoặc ảnh, loại token, header bí mật và giá trị nhạy cảm.']
    ], [
      ['Ví dụ · Request có bearer token', snippet('GET {{base_url}}/v1/transfers?status=PENDING\nAccept: application/json\nAuthorization: Bearer {{access_token}}')],
      ['Đọc request trước khi gửi', 'Path là /v1/transfers, query status=PENDING là điều kiện lọc, Authorization là header. GET trong ví dụ không cần body. Khi token hết hạn, kiểm kết quả của hợp đồng lab và chỉ làm mới token bằng luồng được thiết kế.']
    ], [
      ['Mẫu login trong bài', [
        snippet('POST {{base_url}}/v1/auth/login\nContent-Type: application/json\nAccept: application/json\n\n{"username":"demo-tester","password":"TEST-ONLY-EXAMPLE"}\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{"accessToken":"MOCK-TOKEN","expiresIn":3600}'),
        'accessToken là mẫu giả. Khi mô tả cách kiểm, ghi rõ test trả 200, JSON đúng kiểu, token có giá trị, và password không xuất hiện trong response.'
      ]]
    ], undefined, ['http', 'postman']),
    QA3D3: lesson('§6.1–6.2 · tool và automation · thực hành assertion bổ sung', [
      ['Một assertion có một mục đích rõ', 'Sau khi gửi request ở Postman, đặt kiểm tra trong Scripts → Post-response. Đặt tên theo hợp đồng để biết ngay vì sao fail. Kiểm HTTP trước, sau đó schema và quy tắc nghiệp vụ. Với response JSON, phân biệt field thiếu, null, chuỗi rỗng, sai kiểu và giá trị khác enum mong đợi.'],
      ['Kiểm cả dữ liệu sau request khi cần', 'Body báo SUCCESS có thể chưa chứng minh đã lưu hoặc ghi sổ đúng. Thêm request GET theo transactionId hoặc đối chiếu dữ liệu lab ở mức tích hợp. Lưu biến cho request sau khi đã xác nhận response hợp lệ, và dùng dữ liệu riêng cho mỗi lần chạy.'],
      ['Chọn phép so sánh ổn định', 'So exact cho enum và giá trị hợp đồng. Tránh so toàn bộ JSON nếu có id và timestamp thay đổi. Chỉ dùng ngưỡng response time theo tiêu chí đã thống nhất và môi trường đo được kiểm soát. Tách test thành công khỏi test validation để cùng một assertion không áp dụng sai cho response lỗi.']
    ], [
      ['Ví dụ · Kiểm một lệnh mới được tạo', snippet('pm.test("Created as agreed", () => {\n  pm.response.to.have.status(201);\n});\npm.test("Created order starts pending", () => {\n  pm.expect(pm.response.json()).to.have.property("status", "PENDING");\n});')]
    ], [
      ['Lời giải script cho hợp đồng POST /v1/transfer', snippet('pm.test("HTTP status is 200", () => {\n  pm.response.to.have.status(200);\n});\npm.test("Business status is SUCCESS", () => {\n  pm.expect(pm.response.json()).to.have.property("status", "SUCCESS");\n});\npm.test("Transaction id is present", () => {\n  const body = pm.response.json();\n  pm.expect(body).to.have.property("transactionId");\n  pm.expect(body.transactionId).to.be.a("string");\n  pm.expect(body.transactionId.trim()).not.to.equal("");\n});')],
      ['Tự thử script', 'Thay response giả bằng status PENDING hoặc transactionId null để thấy đúng assertion fail. Đề này giả định transactionId là chuỗi. Nếu hợp đồng khác, sửa kiểm tra kiểu dựa trên schema.']
    ], [
        'API giả lập POST /v1/transfer quy định HTTP 200, status SUCCESS và transactionId là chuỗi có nội dung. Viết ba kiểm tra Post-response.',
        'Kiểm HTTP status bằng 200.',
        'Kiểm trường status bằng SUCCESS.',
        'Kiểm transactionId là chuỗi có nội dung. Cho một payload lỗi để chứng minh assertion phát hiện sai khác.'
    ], ['postman']),
    QA3D4: lesson('§1.1.2, §2.2.1, §5.5 · điều tra failure · thực hành SQL/API bổ sung', [
      ['HTTP 500 là dấu hiệu, chưa phải nguyên nhân', 'Mã 500 báo máy chủ gặp tình trạng ngoài dự kiến khi xử lý request. Ghi thời gian, môi trường, request ID, tham chiếu lệnh, payload đã che dữ liệu và response. Dùng hợp đồng để so request, sau đó đối chiếu log và DB với người phụ trách. Request lỗi có thể kích hoạt một defect ở server, và POST có thể đã tạo side effect trước khi phản hồi lỗi.'],
      ['Kiểm một lệnh theo tham chiếu duy nhất', 'Ví dụ có transactions(client_ref, trans_id, status, amount) và ledger_entries(trans_id, entry_type, amount, currency). Tìm trans_id theo client_ref của lần gửi, sau đó đọc bút toán DEBIT và REVERSAL liên quan. So theo khóa, amount, currency và trạng thái. Tổng số dư riêng lẻ dễ bị ảnh hưởng bởi giao dịch khác.'],
      ['Bốn kết quả khác nhau', 'Chưa có lệnh, có lệnh PENDING chưa ghi sổ, có DEBIT, hoặc có DEBIT kèm hoàn có thể đều đi cùng lỗi 500. Chốt quy tắc tra cứu/đối soát cho mỗi kết quả. Chỉ gọi retry theo hợp đồng chống lặp hoặc khi đã xác minh an toàn.']
    ], [
      ['Ví dụ · Theo dấu một request', 'Postman ghi client_ref=LAB-R17 và request ID Q18. DB trả trans_id=T88, PENDING và có một DEBIT 100.000 VND. Kết luận quan sát là đã có bút toán ghi nợ và trạng thái còn chờ. Cần log hoặc phản hồi đối soát để biết trạng thái cuối và nguyên nhân 500.']
    ], [
      ['Mẫu SQL đọc trạng thái và bút toán', [
        snippet("SELECT trans_id, status, amount\nFROM transactions\nWHERE client_ref = 'LAB-R17';\n\nSELECT t.trans_id, e.entry_type, e.amount, e.currency\nFROM transactions t\nLEFT JOIN ledger_entries e ON e.trans_id = t.trans_id\nWHERE t.client_ref = 'LAB-R17';"),
        'Không có dòng transactions khác có transaction với cột ledger NULL. Khi có nhiều bút toán, kiểm loại và số lượng. Lưu evidence đã che thông tin, nêu các giả thiết và bàn giao request ID cho người xem log.'
      ]]
    ], [
        'API chuyển tiền giả lập trả HTTP 500 với client_ref LAB-R17. Phòng SQL có bảng transactions và ledger_entries tương ứng.',
        'Ghi bằng chứng cần lấy từ Postman và điều cần đối chiếu thêm để điều tra nguyên nhân.',
        'Viết SQL theo client_ref để xác minh có lệnh, có bút toán ghi nợ hoặc đã hoàn tiền hay chưa.'
    ], ['http', 'sql']),
    QA3D5: lesson('§2.2.1–2.2.3, §2.3 · FL-2.2.1–2.2.3, FL-2.3.1', [
      ['Tách kênh, điều phối, mạng và ghi sổ', 'Trong mô hình lab, kênh Web/Mobile nhận lệnh, lớp điều phối (ví dụ gateway, ESB hoặc bộ tiền xử lý) kiểm quy tắc và chuyển tiếp, core/ledger ghi nhận bút toán. IFT là chuyển nội bộ trong mô hình bài. DFT là chuyển nội địa liên ngân hàng ở lab, có thể dùng tuyến nhanh hoặc tuyến thường tùy đặc tả. Tên lớp, thứ tự và quy tắc STP là cấu hình của hệ thống đang test.'],
      ['Vai trò và thời điểm trạng thái đổi', 'Với luồng doanh nghiệp giả lập, Maker tạo lệnh, Checker phê duyệt và Releaser gửi xử lý khi chính sách yêu cầu. Kiểm quyền, maker-checker separation và thao tác trùng. Nếu có bộ tiền xử lý, xem đặc tả để biết thời điểm kiểm hạn mức, số dư, cut-off, ngày giá trị và loại xử lý tự động hoặc thủ công. Tách duyệt trên kênh khỏi xử lý ở core.'],
      ['Chọn test level và type', 'Component thử một đơn vị xử lý. Component integration thử hợp đồng giữa thành phần nội bộ. System thử hệ thống hoàn chỉnh theo yêu cầu. System integration thử trao đổi giữa các hệ thống, ví dụ kết nối đối tác. Acceptance test xác nhận phù hợp nhu cầu sử dụng. Chạy kiểm thử chức năng cho kết quả nghiệp vụ và phi chức năng cho thuộc tính như hiệu năng. Khi sửa hay nâng cấp kết nối, dùng phân tích tác động để chọn confirmation và regression trong maintenance testing.']
    ], [
      ['Ví dụ · Chuyển nhanh A sang B', 'Một lệnh đã được duyệt vào lớp điều phối A. Core A và hệ thống kết nối kiểm/gửi theo hợp đồng lab, NAPAS là trung gian chuyển mạch trong tuyến nhanh mẫu, ngân hàng B xử lý tài khoản đích. Trạng thái trả về được đồng bộ và đối soát theo tham chiếu. Đây là sơ đồ trách nhiệm giả lập, mỗi tích hợp thực tế cần đối chiếu tài liệu của nó.'],
      ['Ví dụ · Điểm kiểm tại ranh giới', 'Thử core A timeout, message sai currency, phản hồi B đến trễ hoặc lặp, và truy vấn giao dịch từ kênh. Ghi cùng một correlation ID xuyên tầng. Kiểm mã tiền, định dạng số, trạng thái trước/sau và không có bút toán lặp.']
    ], [
      ['Lời giải theo từng ranh giới', 'Kênh → điều phối: validate input, quyền, ID giao dịch. Điều phối → core A: kiểm trạng thái ghi nợ và xử lý thiếu số dư. Tuyến liên ngân hàng → core B: kiểm hợp đồng thông điệp và ánh xạ phản hồi. Quay về kênh: xử lý phản hồi trễ, trạng thái chờ và đối soát. Chỉ rõ đâu là system integration và đâu là end-to-end trong phạm vi lab.']
    ], undefined, ['http', 'napas']),
    QA4D1: lesson('§4.2.2–4.2.3 · áp dụng BVA và decision table · nghiệp vụ mô phỏng', [
      ['Tài khoản thanh toán, tiền gửi và sự kiện tất toán', 'CASA thường dùng để nói về nhóm tài khoản thanh toán/tiết kiệm không kỳ hạn trong bối cảnh ngân hàng, nhưng cách dùng và lãi suất phụ thuộc sản phẩm. Một sổ có kỳ hạn gồm gốc, ngày gửi, ngày đáo hạn và rule lãi. Tất toán trước hạn phải đọc rule chính xác về lãi suất áp dụng, số ngày, tính lãi và làm tròn. Các số ở đây dùng để luyện test.'],
      ['Tính expected từ dữ liệu lab', 'Nếu đặc tả dùng lãi đơn với cơ sở 365 ngày, nhân gốc với lãi suất năm dạng thập phân và số ngày thực gửi, rồi chia cho 365. Ví dụ 0,20%/năm là 0,002 trong phép tính. Làm tròn theo đặc tả ở bước được chỉ định. Tính độc lập từ bảng tính rồi mới so với ứng dụng.'],
      ['Bao phủ thời điểm và quyền thao tác', 'Chọn một ngày trước đáo hạn, đúng ngày đáo hạn và sau đáo hạn nếu có luồng riêng. Tách quyền chủ sổ, tình trạng phong tỏa và điều kiện tất toán toàn bộ hoặc từng phần. Kiểm số dư trước/sau, sổ đóng, lịch sử và chống gửi lặp khi đã tất toán.']
    ], [
      ['Ví dụ · Lãi theo một bộ dữ liệu khác', 'Gốc 12.000.000 VND, tất toán sau 30 ngày theo tỷ lệ 0,20% và cơ sở 365. Lãi = 12.000.000 × 0,002 × 30 / 365 ≈ 1.972,60 VND. Làm tròn đến VND gần nhất rồi cộng gốc là 12.001.973 VND. Nếu đổi số ngày hoặc tỷ lệ, thay đúng biến và giữ cách làm tròn.']
    ], [
      ['Bộ case trọng tâm', 'Trước hạn sau 60 ngày → dùng 0,20% giả lập và ghi có 10.003.288 VND. Đúng hạn → dùng quy tắc đáo hạn đã cung cấp riêng hoặc ghi cần làm rõ. Sổ phong tỏa hoặc người dùng không có quyền → từ chối theo rule và không chuyển tiền. Gửi lặp → kiểm chỉ ghi có một lần. Tách một case kiểm tiền lãi khỏi case kiểm quyền.']
    ], 'Lab tất toán toàn bộ sổ gốc 10.000.000 VND, trước hạn sau 60 ngày. Dùng 0,20%/năm, mẫu số 365, làm tròn đến VND gần nhất. Lập test case tính lãi, biên ngày đáo hạn, quyền thao tác và chống ghi có lặp. Nêu phần cần hỏi nếu đặc tả chưa cho kết quả đáo hạn.'),
    QA4D2: lesson('§4.2.4, §5.2.4 · state transition và kiểm soát rủi ro · nghiệp vụ mô phỏng', [
      ['Timeout tạo trạng thái chưa xác định', 'Có thể xảy ra khi yêu cầu gửi đi nhưng chưa có phản hồi đúng hạn. Core hoặc ledger của ngân hàng ghi bút toán theo hợp đồng. Phản hồi mạng chuyển mạch và kết quả ghi sổ là hai nguồn bằng chứng cần ghép bằng tham chiếu. Kênh hiển thị PENDING nếu lab chưa thể kết luận, sau đó cập nhật khi đối soát xác nhận.'],
      ['Đối soát theo khóa và số liệu', 'Dùng tham chiếu gửi ban đầu để khớp record nội bộ với record đối tác. So amount, currency, trạng thái, thời gian và bút toán. Tách trường hợp bên kia thành công, xác nhận thất bại, chưa có kết quả, hoặc lệch số tiền. Nếu lệnh đã ghi nợ và thất bại được xác nhận, lab tạo bút toán hoàn có liên kết với bút toán gốc.'],
      ['Bảo đảm một hiệu ứng tài chính', 'Kiểm đối tác gửi callback lặp, hai job đối soát chạy đồng thời và callback đến sau lần retry. Expected là không ghi nợ/hoàn trùng. Retry ở lớp mạng không thay thế cơ chế chống lặp ở dữ liệu. Khi chuyển trạng thái cuối, kiểm lịch sử, thông báo và màn tra cứu nhất quán.']
    ], [
      ['Ví dụ · Một lệnh bị chậm phản hồi', 'TX-17 bị timeout sau khi core A đã ghi nợ 200.000 VND. Màn hình báo PENDING theo rule lab. Tệp đối soát trả success cho đúng tham chiếu và số tiền. Hệ thống chuyển SUCCESS, không ghi nợ lần nữa, và tra cứu kênh hiện trạng thái cuối. Gửi lại record đối soát để kiểm idempotency.']
    ], [
      ['Bảng kết quả cần kiểm', table(
        ['Phản hồi đáng tin cậy', 'Trạng thái lab', 'Bút toán'],
        ['Đối tác xác nhận thành công, khớp tham chiếu và số tiền', 'SUCCESS', 'Giữ đúng một DEBIT, không REVERSAL'],
        ['Thất bại được xác nhận sau DEBIT', 'REVERSED khi hoàn tất hoàn', 'Một DEBIT và một REVERSAL đúng số tiền'],
        ['Chưa rõ hoặc không khớp dữ liệu', 'PENDING/điều tra theo rule lab', 'Không suy đoán và không tạo bút toán lặp']
      )]
    ], 'Lab: ngân hàng gửi đã ghi nợ 200.000 VND trước khi lệnh timeout. Viết case (1) kết quả đối soát xác nhận thành công, (2) kết quả đối soát xác nhận thất bại và hoàn tiền, (3) thông điệp đối soát lặp. Ghi trạng thái và số bút toán mong đợi ở từng trường hợp.', ['napas']),
    QA4D3: lesson('§4.2.2–4.2.3 · kỹ thuật thiết kế · nghiệp vụ thẻ mô phỏng', [
      ['Ba giá trị hay bị nhầm', 'Dư nợ sao kê là số theo kỳ, dư nợ hiện tại có thể gồm giao dịch sau kỳ và số tối thiểu phải trả là một giá trị theo chính sách. Màn thanh toán phải lấy đúng trường cho mỗi lựa chọn. Chốt phạm vi “toàn bộ” nghĩa là dư nợ nào, số lẻ tiền tệ, thời điểm áp dụng và phí nếu đặc tả có.'],
      ['Từ lựa chọn đến expected', 'Trong lab, dư nợ dùng tính trả là 5 triệu, tối thiểu 500 nghìn, không có phí, dư nợ giảm khi thanh toán đã ghi nhận. Chọn “toàn bộ” gợi ý 5 triệu, “tối thiểu” gợi ý 500 nghìn, “tùy chọn” cho nhập theo giới hạn. Kiểm đúng giá trị hiện trên màn, lệnh thanh toán và số dư sau hạch toán.'],
      ['Lỗi và tính nhất quán', 'Kiểm nguồn tiền thiếu, số nhập 0, lớn hơn dư nợ, gõ số lẻ nếu tiền tệ không hỗ trợ, bấm hai lần và phản hồi chậm. Trạng thái PENDING có thể hiển thị số dư cũ theo rule. Không áp dụng kết luận về lãi/phí thực tế từ phép tính dư nợ đơn giản trong lab.']
    ], [
      ['Ví dụ · Thanh toán tùy chọn trong lab', 'Dư nợ đang 5.000.000 VND. Nhập 800.000 VND, nguồn đủ tiền và thanh toán đã ghi nhận. Dư nợ còn 4.200.000 VND và lịch sử có một dòng thanh toán. Kiểm cả thông tin phản hồi và bút toán nguồn.']
    ], [
      ['Ba case cơ bản', table(
        ['Lựa chọn', 'Số thanh toán', 'Dư nợ còn lại sau ghi nhận'],
        ['Toàn bộ', '5.000.000 VND', '0 VND'],
        ['Tối thiểu', '500.000 VND', '4.500.000 VND'],
        ['Tùy chọn', '1.200.000 VND', '3.800.000 VND']
      )],
      ['Tiêu chí đạt', 'Ghi rõ tiền điều kiện và thời điểm kiểm. Thêm một case giá trị ngoài phạm vi và một case retry để xác minh không trừ tiền lặp.']
    ], 'Lab thẻ có dư nợ 5.000.000 VND, tối thiểu 500.000 VND, chưa tính phí. Tùy chọn cho nhập từ 1 VND đến dư nợ. Viết case toàn bộ, tối thiểu và tùy chọn 1.200.000 VND. Kiểm số tiền hiển thị, ghi nhận, dư nợ sau ghi nhận và một ca ngoài phạm vi.'),
    QA4D4: lesson('§2.2.2, §4.4.1, §5.2 · bảo mật và phân tích rủi ro · eKYC mô phỏng', [
      ['eKYC, liveness và kiểm tra hồ sơ', 'eKYC là quy trình xác minh danh tính qua kênh điện tử. Một lab có thể tách đọc giấy tờ, đối chiếu khuôn mặt và kiểm tra dấu hiệu hiện diện (liveness). KYC xác định hoặc xác minh khách hàng; chương trình AML có thể dùng kết quả đó cùng các kiểm tra và quy trình nghiệp vụ khác. Một kết quả liveness riêng lẻ không quyết định kết quả AML.'],
      ['Thiết kế theo nhóm dữ liệu giả lập', 'Dùng fixture hợp lệ làm control. Dùng fixture ảnh màn hình đã gắn nhãn replay, tài liệu ảnh thiếu vùng dữ liệu, hoặc khuôn mặt không khớp với hồ sơ thử. Ghi ngưỡng và số lần thử theo hợp đồng lab. Xác định case nào bị chặn, được thử lại hoặc chuyển review thủ công. Chạy trong môi trường được cấp quyền và không dùng giấy tờ thật.'],
      ['Đo kết quả và bảo vệ bằng chứng', 'Kiểm cả từ chối sai người hợp lệ và chấp nhận sai hồ sơ không hợp lệ. Nếu lab có điều kiện ánh sáng kém hoặc dữ liệu không đọc được, tách lỗi chất lượng ảnh khỏi lỗi mismatch. Bằng chứng chỉ cần mã fixture, thời điểm, mã phản hồi và quyết định. Kiểm các ảnh, token và số giấy tờ không lọt vào log hoặc báo cáo.']
    ], [
      ['Ví dụ · Một ca không khớp giấy tờ', 'Mở phiên eKYC TEST-ID-A với giấy tờ giả lập A, chọn fixture ảnh chân dung B có liveness pass. Theo rule lab, bước đối chiếu nhận diện đánh dấu mismatch và không tự tạo hồ sơ đã xác minh. Thử control A + A để biết quy trình cơ bản hoạt động.']
    ], [
      ['Bộ scenario', 'Tài liệu và mặt đúng → tiếp tục theo lab. Fixture replay → liveness không qua. Tài liệu thiếu góc hoặc ký tự → yêu cầu chụp lại. Mặt B với tài liệu A → mismatch. Quá ngưỡng retry giả lập → chặn hoặc review thủ công theo đặc tả. Ghi expected, dữ liệu giả, lớp kiểm và quyền xem log.']
    ], undefined, ['owasp']),
    QA4D5: lesson('§2.2.2, §5.2 · security testing · mở rộng theo OWASP API Security', [
      ['Xác thực, quyền chức năng và quyền đối tượng', 'Xác thực trả lời “ai đang gọi”. Quyền chức năng trả lời người gọi có thể thực hiện thao tác nào. Quyền đối tượng kiểm họ có quyền trên fromAccount cụ thể hay không. Broken Object Level Authorization có thể xảy ra dù token còn hạn. Dùng hai tài khoản thử cùng môi trường để kiểm tra ranh giới sở hữu.'],
      ['Dùng baseline để điều tra khác biệt', 'Gửi một request đúng đã xác minh trước, sao chép vào Repeater của lab Burp và chỉ đổi một yếu tố mỗi lần. Kiểm schema/validation, nghiệp vụ và quyền độc lập. Ghi expected code theo hợp đồng. Ví dụ 403 hoặc 404 có thể đều phù hợp nếu chính sách được mô tả rõ. Kiểm không tạo lệnh hoặc bút toán khi bị từ chối.'],
      ['Chọn dữ liệu và phạm vi', 'Dùng ID giả lập, token test và API được phép kiểm. Chụp request/response đã che token. Khi server nhận các trường ngoài schema, kiểm chúng không thay đổi trạng thái hay quyền. Đọc evidence từ hệ thống thử, không kết luận chỉ từ nút UI bị ẩn.']
    ], [
      ['Ví dụ · Test ownership trên API đọc', 'Token của TEST-A lấy được /v1/transfers/A-01. Đổi đúng ID thành B-01 thuộc TEST-B. Theo hợp đồng lab, server từ chối và không trả chi tiết giao dịch. Đây là kiểm quyền trên một đối tượng, độc lập với việc token có hợp lệ.']
    ], [
      ['Bốn phép thay đổi trong lab', 'Đổi fromAccount sang nguồn thuộc TEST-B → chặn ownership. Đổi amount thành 0 hoặc âm → validation chặn. Đổi amount sang chuỗi khi schema yêu cầu số → chặn kiểu. Thêm trường status=APPROVED do client tự gửi → từ chối trường hoặc bỏ qua theo hợp đồng và lệnh không được duyệt. Kiểm bằng cùng một baseline và thay đúng một biến mỗi case.']
    ], 'Dùng POST /api/v1/transfer ở sandbox được cấp quyền với {"fromAccount":"MOCK-A","toAccount":"MOCK-B","amount":1000000}. Mô tả bốn test payload, giữ nguyên các biến khác trong từng test. Nêu expected ở API và ghi sổ, bao gồm nguồn thuộc người dùng khác.', ['owasp', 'http']),
    QA5D1: lesson('§4.2.3, §5.2.2–5.2.4 · decision table và kiểm thử theo rủi ro', [
      ['Tách phê duyệt hạn mức và sử dụng hạn mức', 'Thấu chi cho phép dùng tiền trong giới hạn đã cấp theo điều kiện sản phẩm. Trong lab, yêu cầu đăng ký đi qua eligibility, kiểm dữ liệu và quyết định phê duyệt. Approval tạo hạn mức khả dụng trong mô hình, còn rút hoặc chi qua hạn mức là một sự kiện riêng. Kiểm mỗi trạng thái và tác động của nó lên dữ liệu.'],
      ['Lập bảng điều kiện nghiệp vụ', 'Xác định người dùng đủ điều kiện, hồ sơ đầy đủ, hạn mức được yêu cầu trong phạm vi và đã có hồ sơ đang xử lý hay chưa. Điều kiện đi cùng nhau thì dùng decision table. Mỗi rule cần expected gồm trạng thái, thông báo và có hay không tạo hồ sơ/hạn mức. Ghi rõ rule đang giả định và rule chưa có.'],
      ['Chọn kiểm soát bảo mật theo rủi ro', 'Ưu tiên người ngoài xem hồ sơ, khách tự nâng hạn mức và trạng thái bị sửa trái phép. Dùng hai khách giả lập và kiểm quyền trên từng hồ sơ. Thử request lặp, truy cập trực tiếp API và log dữ liệu nhạy cảm. Product risk liên quan chất lượng sản phẩm, còn thiếu môi trường tích hợp là project risk ảnh hưởng tiến độ.']
    ], [
      ['Ví dụ · Hồ sơ trùng và quyền truy cập', 'Khách A đã có hồ sơ PENDING. Gửi lại cùng yêu cầu, lab trả hồ sơ hiện hữu hoặc xung đột theo hợp đồng, không tạo hạn mức thứ hai. Khách B không được đọc hồ sơ của A qua API dù biết ID. Đây là hai rủi ro, cần hai ca và hai expected khác nhau.']
    ], [
      ['Mẫu hai checklist', 'Nghiệp vụ: eligibility, hồ sơ thiếu, hạn mức đúng biên, trùng hồ sơ, trạng thái phê duyệt và không giải ngân chỉ vì duyệt. Bảo mật: quyền theo hồ sơ, token hết hạn, client sửa trường limit/status, log và xuất dữ liệu. Mỗi mục chọn tối thiểu một ca có fixture, endpoint/lớp kiểm và bằng chứng. Ưu tiên thay đổi hạn mức hoặc truy cập dữ liệu trái phép.']
    ], undefined, ['owasp']),
    QA5D2: lesson('§2.2.2, §5.3.1 · kiểm thử phi chức năng và metrics · JMeter bổ sung', [
      ['Từ giả thiết tải đến cấu hình', 'Thread Group biểu diễn các virtual user. Number of Threads đặt số thread, Ramp-up là thời gian khởi động chúng, Loop Count là số vòng mỗi thread chạy. Với 500 thread và ramp-up 10 giây, trung bình khởi động khoảng 50 thread mỗi giây. Thread có thể hoàn tất sớm, nên số thread thực sự chạy cùng lúc và số request/giây cần đo.'],
      ['Định nghĩa tải trước khi đo', 'Dùng HTTP Request sampler cho POST /api/v1/payments, Header Manager cho JSON, dữ liệu và mã tham chiếu riêng từng giao dịch. Kiểm response theo hợp đồng và tránh tạo record trùng vì tái dùng dữ liệu. Ghi môi trường, dataset, think time và tiêu chí chấp nhận đã thống nhất. Chạy small smoke trước khi nâng tải.'],
      ['Đọc metric đúng đơn vị', 'Average response time cho độ trễ trung bình, p95 cho biết mức thời gian mà khoảng 95% mẫu không vượt quá. Throughput đếm mẫu hoàn thành theo đơn vị thời gian của report. TPS nghiệp vụ chỉ bằng throughput của sampler nếu một mẫu là đúng một giao dịch theo định nghĩa. Error % là mẫu lỗi trên tổng mẫu. Đọc cùng CPU, kết nối DB hoặc queue depth khi phân tích nút thắt.']
    ], [
      ['Ví dụ · Dữ liệu đo giả lập', 'Trong 60 giây có 1.200 mẫu, 24 mẫu lỗi. Throughput quan sát là 20 mẫu/giây, error rate 2%. Nếu average là 250 ms nhưng p95 là 1.200 ms, người dùng ở phần đuôi chịu chậm hơn nhiều. Chỉ pass/fail khi so với mục tiêu tải và ngưỡng đã cho.']
    ], [
      ['Cấu hình và cách báo cáo', 'Đặt Threads=500, Ramp-up=10s, Loops=5. Một HTTP sampler mỗi vòng tạo tối đa 2.500 lần thử nếu hoàn tất đủ vòng, chưa tính sampler khác. Báo duration, số mẫu, throughput, average, p95 và error %, rồi phân loại lỗi theo status và nguyên nhân đo được. Giữ báo cáo nhẹ khi chạy tải và phân tích kết quả sau.']
    ], undefined, ['load']),
    QA5D3: lesson('§6.1–6.2, §5.4 · công cụ, rủi ro automation và quản lý phiên bản', [
      ['Collection là testware có phiên bản', 'Newman chạy collection Postman qua CLI, nên dùng collection JSON tương thích và environment thử nghiệm. Giữ file mẫu không chứa secret, chốt phiên bản Newman, reporter và Node bằng lockfile của dự án. Cho mỗi lần chạy dữ liệu riêng hoặc có bước cleanup để bộ test không phụ thuộc lần trước.'],
      ['Phân biệt console và báo cáo máy đọc', 'CLI reporter in tóm tắt cho người chạy. JSON hoặc JUnit thuận tiện cho công cụ CI. Báo cáo HTML cần reporter tương ứng được cài cùng môi trường Node, ví dụ reporter cộng đồng htmlextra. Newman CLI sẵn có không tự hiểu tùy chọn của reporter chưa cài.'],
      ['Kết quả chạy phải tác động build', 'Cho assertion fail trả exit code khác 0 để gate CI nhận biết lỗi. Tránh suppress exit code nếu muốn chặn bản lỗi. Xuất report để chẩn đoán cả khi test fail, rà header, token và dữ liệu nhạy cảm trước khi chia sẻ.']
    ], [
      ['Ví dụ · CLI và JUnit', snippet('npx newman run collections/smoke.json -e environments/lab.json -r cli,junit --reporter-junit-export reports/smoke.xml')]
    ], [
      ['CLI và HTML cho đề bài', [
        'Sau khi newman và newman-reporter-htmlextra đã có trong dev dependencies của dự án, chạy trong thư mục dự án và tạo thư mục reports.',
        snippet('npx newman run collections/payments.json -e environments/lab.json -r cli,htmlextra --reporter-htmlextra-export reports/payments.html'),
        'Thử đổi một expected để thấy CLI fail, process trả lỗi và report giúp tìm đúng request. Dùng giá trị thử, giữ secret trong môi trường chạy.'
      ]]
    ], undefined, ['newman']),
    QA5D4: lesson('§6.2, §2.2.1 · lợi ích, rủi ro và vị trí của UI automation', [
      ['Một test UI có thể lặp lại', 'Mỗi test chuẩn bị tài khoản giả lập và trạng thái ban đầu rõ. Dùng locator theo vai trò, nhãn người dùng thấy hoặc test ID đã thống nhất. Xác định assertion đầu ra như heading trang tài khoản, thêm kiểm API riêng nếu cần xác minh dữ liệu. Browser context riêng giảm rò trạng thái giữa test.'],
      ['Chờ trạng thái, tránh chờ số giây', 'Playwright tự chờ điều kiện thao tác của locator, còn web-first assertion sẽ thử lại đến khi đạt hoặc hết thời gian chờ. Dùng expect(locator).toBeVisible() cho nội dung xuất hiện sau request. Lệnh sleep cố định có thể vừa làm chậm bộ test vừa fail khi hệ thống lâu hơn dự tính.'],
      ['Quyết định nên tự động hóa ở đâu', 'UI hữu ích cho vài luồng kinh doanh xuyên màn hình, còn rule tính toán, quyền và validation thường kiểm nhanh hơn ở unit hoặc API. Chọn case có giá trị chạy lặp và dữ liệu kiểm soát được. Khi fail, đọc trace và request thay vì tăng timeout theo phản xạ.']
    ], [
      ['Ví dụ · Một assert chờ nội dung', snippet("await page.goto('/accounts');\nawait expect(page.getByRole('heading', { name: 'Tài khoản' })).toBeVisible();")]
    ], [
      ['Lời giải Playwright Test TypeScript', [
        'Ví dụ giả định baseURL trỏ vào lab, các nhãn truy cập đã có và người dùng mẫu được seed.',
        snippet("import { test, expect } from '@playwright/test';\n\ntest('active user opens account dashboard', async ({ page }) => {\n  await page.goto('/login');\n  await page.getByLabel('Tên đăng nhập').fill('demo-user');\n  await page.getByLabel('Mật khẩu').fill('TEST-ONLY');\n  await page.getByRole('button', { name: 'Đăng nhập' }).click();\n  await expect(page.getByRole('heading', { name: 'Số dư tài khoản' })).toBeVisible();\n});"),
        'Thêm test sai mật khẩu với bằng chứng không tạo phiên. Khi chạy CI, lấy thông tin test từ cấu hình được phép.'
      ]]
    ], undefined, ['playwright']),
    QA5D5: lesson('§6.2, §5.4 · testware bảo trì được · mẫu Playwright POM bổ sung', [
      ['Tách kiến thức về giao diện khỏi ý định test', 'Page Object gom locator và hành động có nghĩa như mở trang, nhập người nhận và gửi lệnh. File spec giữ tiền điều kiện, dữ liệu, quy tắc mong đợi và assertion nghiệp vụ. Khi đổi nhãn nút, sửa locator một nơi. Khi đổi quy tắc hạn mức, sửa hoặc thêm test ở spec.'],
      ['Thiết kế API nhỏ cho Page Object', 'Class là mẫu mô tả dữ liệu và hành động của đối tượng. Khi gọi new TransferPage(page), constructor nhận page của bài test, còn method như submit() thao tác trên page đó. Tách fillTransfer(data) và submit() để test âm có thể kiểm riêng bước nhập hoặc bước gửi. Tạo Page Object cho từng test để dữ liệu không lẫn khi chạy song song.'],
      ['Chọn ranh giới assertion', 'Page Object có thể cung cấp locator hoặc getter cho thông báo và mã lệnh. Test quyết định expected dựa vào case. Với flow dài, giữ phương thức đủ nhỏ để biết bước nào fail và tái dùng không kéo theo side effect bất ngờ.']
    ], [
      ['Ví dụ · Cấu trúc file', snippet('pages/TransferPage.ts  -> locators, open(), fillTransfer(data), submit()\nfixtures/transfer.ts   -> synthetic accounts and seed helpers\ntests/transfer.spec.ts -> authorized, invalid amount, duplicate request')]
    ], [
      ['Mẫu cách dùng', [
        snippet("const transfer = new TransferPage(page);\nawait transfer.open();\nawait transfer.fillTransfer({ recipient: 'MOCK-B', amount: '0' });\nawait transfer.submit();\nawait expect(transfer.amountError).toBeVisible();"),
        'Bổ sung spec hợp lệ kiểm confirmation, và case quyền không dựa riêng vào UI. Tên method thể hiện hành vi, còn thông tin cụ thể của một case nằm ở spec.'
      ]]
    ], undefined, ['pom']),
    QA6D1: lesson('§2.1.4–2.1.5, §5.4, §6.2 · DevOps, shift left và automation', [
      ['Pipeline là điểm phản hồi sớm', 'Workflow mô tả sự kiện, job, runner và step. Một job chạy theo các bước cài dependency theo lockfile, chuẩn bị browser và dữ liệu, chạy test rồi lưu report. Chạy bộ smoke trên thay đổi thường xuyên và tách bộ chậm theo rủi ro. Chốt phiên bản Node, OS và testware giúp tái hiện failure.'],
      ['Chạy đúng môi trường và quan sát được lỗi', 'Playwright cần baseURL hoặc webServer trong cấu hình để mở app lab. Chạy npm ci khi có package-lock. Tách lỗi chuẩn bị môi trường, lỗi test và lỗi ứng dụng. Để exit code của test quyết định job thành bại và tải trace/report khi có lỗi.'],
      ['Quản lý quyền và bí mật', 'Dùng quyền đọc mã cho job chỉ cần chạy test, đưa thông tin xác thực lab qua cơ chế secret của CI và tránh in ra log. Khi workflow chạy mã chưa tin cậy từ pull request, áp dụng chính sách quyền và secrets của repo. Chỉ thay đổi pipeline sau khi nhóm có thể đọc được kết quả.']
    ], [
      ['Ví dụ · Cổng chất lượng', 'Commit thay validation ở ô số tiền. CI chạy unit và API nhanh trước, sau đó UI smoke kiểm đường đi hợp lệ và 0 VND. Nếu UI fail do môi trường không khởi động, log health check và report giúp phân biệt với lỗi validation.']
    ], [
      ['Workflow cho một repo lab đã cấu hình Playwright', [
        snippet('name: UI smoke\non: [push]\npermissions:\n  contents: read\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v6\n      - uses: actions/setup-node@v6\n        with:\n          node-version: "22"\n          cache: npm\n      - run: npm ci\n      - run: npx playwright install --with-deps chromium\n      - run: npx playwright test --project=chromium\n      - uses: actions/upload-artifact@v4\n        if: ${{ !cancelled() }}\n        with:\n          name: playwright-report\n          path: playwright-report/'),
        'Bật HTML reporter và định nghĩa project chromium trong cấu hình trước khi chạy ví dụ. Xem step đầu tiên fail, tái hiện với cùng lockfile và không bỏ qua exit code để làm pipeline xanh.'
      ]]
    ], undefined, ['ci', 'playwright']),
    QA6D2: lesson('§5.1.1–5.1.3, §5.1.5–5.1.7 · FL-5.1.1–5.1.3', [
      ['Từ mục tiêu đến phạm vi', 'Test plan ghi mục tiêu, phạm vi, cách kiểm, nguồn lực, lịch, dữ liệu, môi trường, rủi ro và báo cáo cho một hoạt động cụ thể. Strategy diễn đạt cách tiếp cận ở mức cao hơn trong bối cảnh dự án, ví dụ ưu tiên risk-based và kiểm ở lớp thấp nhất có thể. Test plan của QR phải nối với rủi ro như sai người nhận, trùng bút toán và phản hồi trễ.'],
      ['Entry và exit criteria', 'Entry là điều kiện để bắt đầu có ích, ví dụ build smoke pass, dữ liệu seed và hợp đồng API được duyệt. Exit là điều kiện kết thúc như coverage yêu cầu ưu tiên, tình trạng lỗi nghiêm trọng, bằng chứng đối soát và người duyệt rủi ro còn lại. Ghi ai xác nhận và dùng metric nào. “Test hết” không chỉ rõ cách đo.'],
      ['Ưu tiên và phân tầng', 'Dùng rủi ro hoặc dependency để sắp thứ tự case. Test pyramid khuyến khích nhiều kiểm tra nhỏ nhanh hơn và ít E2E hơn. Testing quadrants giúp thấy cả test hỗ trợ đội phát triển lẫn đánh giá sản phẩm, theo góc kỹ thuật và nghiệp vụ. Chọn độ sâu, loại và thời điểm kiểm tùy hệ thống.']
    ], [
      ['Ví dụ · Scope có ranh giới', 'Trong phạm vi là quét QR, nhận diện B, xác nhận, tạo lệnh, kiểm một bút toán và trạng thái cuối. Ngoài phạm vi sprint lab là cấp thẻ và QR liên quốc gia. Đánh dấu phụ thuộc môi trường tích hợp B và dữ liệu mock đối soát.']
    ], [
      ['Mẫu exit criteria có thể kiểm', 'Tất cả quy tắc QR rủi ro cao đã chạy có bằng chứng. Không còn defect nghiêm trọng chưa xử lý theo định nghĩa nhóm. Ca callback lặp xác minh một bút toán. Phần bị block vì thiếu hệ tích hợp có owner, kế hoạch bổ sung và quyết định chấp nhận rủi ro. Ghi rõ đây là tiêu chí mẫu để thảo luận, không thay cho gate dự án.']
    ]),
    QA6D3: lesson('§5.1.4, §5.2.1–5.2.4 · FL-5.1.4, FL-5.2.1–5.2.4', [
      ['Phân rã trước khi ước lượng', 'Tách đọc yêu cầu, chuẩn bị dữ liệu, chạy, điều tra, retest và báo cáo. Ước lượng dựa trên giả định về người làm, môi trường và phần có thể chạy song song. Có thể dùng tỷ lệ lịch sử, ngoại suy, đồng thuận chuyên gia hoặc ước lượng ba điểm. Ghi rõ đơn vị giờ công hay thời gian lịch.'],
      ['Ba điểm theo CTFL', 'O là lạc quan, M là khả năng cao nhất, P là bi quan. Với cách tính được nêu trong syllabus, E = (O + 4M + P) / 6 và độ lệch ước tính SD = (P − O) / 6. Cộng các E khi tính tổng nỗ lực. Thời gian lịch còn phụ thuộc thứ tự công việc, khả năng làm song song và nguồn lực.'],
      ['Dùng rủi ro để điều chỉnh kế hoạch', 'Product risk ví dụ ghi nợ trùng, project risk ví dụ đối tác chưa cấp môi trường. Đánh giá khả năng và tác động, chỉ ra biện pháp giảm, người phụ trách và rủi ro còn lại. Khi nhiều task cùng phụ thuộc một môi trường, ghi ảnh hưởng chung thay vì coi chúng độc lập.']
    ], [
      ['Ví dụ · Một task nhỏ', 'Chuẩn bị dữ liệu có O=1, M=2, P=5 giờ. E = (1+8+5)/6 = 2,33 giờ. SD = (5−1)/6 ≈ 0,67 giờ. Nếu chưa có quyền seed dữ liệu, thêm mốc kiểm quyền và dự kiến thời gian chờ riêng.']
    ], [
      ['Kết quả cho A, B và C', 'A = 26/6 ≈ 4,33h. B = 42/6 = 7h. C = 12/6 = 2h. Tổng = 80/6 ≈ 13,33h (13 giờ 20 phút). Rủi ro làm P cao ở B nên được ghi cụ thể, ví dụ môi trường tích hợp chưa có dữ liệu hoàn. Giữ số chưa làm tròn khi cộng.']
    ]),
    QA6D4: lesson('§3.2, §5.3.2–5.3.3 · FL-3.2.1–3.2.5', [
      ['Review là static testing của testware', 'Review test case có thể tìm missing coverage, bước không tái hiện được và expected mơ hồ trước khi chạy. Lập kế hoạch phạm vi và tiêu chí, giới thiệu tài liệu, từng người đọc trước, thảo luận và phân loại, rồi sửa và báo cáo kết quả. Với tài liệu lớn, chia phạm vi để review kỹ.'],
      ['Chọn loại review và vai trò', 'Informal review có thể nhanh và ít thủ tục. Walkthrough thường do tác giả dẫn, phù hợp giải thích và thu phản hồi. Technical review dùng người có chuyên môn, có điều phối. Inspection có cấu trúc và theo dõi nghiêm hơn. Tùy loại, phân vai author, reviewer, moderator, người ghi nhận, review leader và quản lý. Phản hồi tập trung vào sản phẩm công việc.'],
      ['Viết feedback có việc để sửa', 'Nêu vị trí, điều chưa rõ, tác động và thay đổi đề nghị. Ví dụ link AC cụ thể, thêm dữ liệu tài khoản locked và expected không tạo phiên. Báo cáo tiến độ cho biết đã chạy gì, thay đổi, blocker và việc cần quyết. Báo cáo kết thúc thêm coverage, lỗi tồn và rủi ro bàn giao cho người có thẩm quyền.']
    ], [
      ['Ví dụ · Nhận xét cụ thể', 'Ở TC-17 bước 4, expected “hiện lỗi đúng” chưa đủ để người khác chạy lại. Theo AC-TRF-04, hãy ghi điều kiện số tiền bằng 0, vị trí lỗi dưới ô số tiền và màn nhập vẫn mở. Thêm một case timeout sau gửi với điểm kiểm trạng thái theo tham chiếu.']
    ], [
      ['Mẫu comment và cách follow-up', '“TC-QR-02 có bước quét mã nhưng chưa ghi fixture, nên người khác khó phân biệt QR hỏng và người nhận ngừng hoạt động. Tách hai trường hợp và gắn AC tương ứng. Với timeout sau xác nhận, bổ sung tham chiếu và expected chưa ghi lặp.” Sau khi sửa, xác nhận rule được liên kết và cập nhật trạng thái review.']
    ]),
    QA6D5: lesson('§1–6 · bài tổng hợp áp dụng mục tiêu CTFL vào Banking', [
      ['Dựng mô hình trước khi lập danh sách case', 'Trong lab phát hành thẻ, hồ sơ đi từ submitted sang review rồi approved hoặc declined theo quy tắc. Approval hợp lệ tạo một record hạn mức và cho phép bước phát hành theo hợp đồng. Nêu test basis, dữ liệu eligibility, vai trò duyệt và cách phát hiện hai job cùng xử lý một hồ sơ. Bắt đầu bằng review các rule còn mơ hồ.'],
      ['Ghép kỹ thuật, cấp độ và rủi ro', 'EP/BVA cho thu nhập, hạn mức và trường bắt buộc. Decision table cho eligibility và policy. State transition cho vòng đời hồ sơ. Component kiểm tính hạn mức, integration kiểm trao đổi với hệ chấm điểm giả lập, system kiểm luồng và acceptance kiểm cách nghiệp vụ xác minh kết quả. Bổ sung API quyền hồ sơ, thời gian xử lý, lỗi đối tác và retry.'],
      ['Thiết kế dữ liệu kiểm tra độc lập', 'Schema lab gồm applications(id, status, approved_limit) và credit_limits(id, application_id, amount). Đọc records theo khóa, so số và kiểm mỗi hồ sơ approved có đúng một hạn mức. Query ngoại lệ dùng LEFT JOIN để phát hiện thiếu record, hoặc HAVING COUNT(cl.id) <> 1 để phát hiện thiếu/trùng. Dùng dữ liệu giả và ghi bằng chứng có thể tái hiện.']
    ], [
      ['Ví dụ · Một rủi ro có phép kiểm', 'Hai callback duyệt lặp có thể tạo hai hạn mức. Dùng một hồ sơ TEST-19, gửi lại callback theo sandbox, rồi đối chiếu hồ sơ approved và số record hạn mức. Tiêu chí là một hạn mức đúng giá trị. Xem xét constraint theo application_id và cơ chế ghi nguyên tử để giảm rủi ro.']
    ], [
      ['Hai câu SQL tìm bất thường', snippet("SELECT a.id, COUNT(cl.id) AS limit_rows\nFROM applications a\nLEFT JOIN credit_limits cl ON cl.application_id = a.id\nWHERE a.status = 'APPROVED'\nGROUP BY a.id\nHAVING COUNT(cl.id) <> 1;\n\nSELECT a.id, a.approved_limit, cl.amount\nFROM applications a\nJOIN credit_limits cl ON cl.application_id = a.id\nWHERE a.status = 'APPROVED'\n  AND a.approved_limit IS DISTINCT FROM cl.amount;")],
      ['Tiêu chí tự đánh giá', 'Có ma trận rủi ro, traceability từ rule đến test và lựa chọn cấp độ hợp lý. Có ca quyền, hiệu năng theo tiêu chí, retry và kiểm dữ liệu. Với dữ liệu chuẩn, hai query trả rỗng. Tạo fixture thiếu, trùng hoặc sai tiền để chứng minh query phát hiện lỗi. Kết luận phát hành cần nêu coverage, lỗi mở và rủi ro còn lại.']
    ], [
        'Hồ sơ APPROVED trong lab phải có đúng một record hạn mức với số tiền khớp giá trị đã duyệt. Dùng applications và credit_limits trong phòng SQL.',
        'Liệt kê rủi ro và phép kiểm theo mức tác động.',
        'Thiết kế phạm vi và cách kiểm ở cấp component, tích hợp và toàn hệ thống.',
        'Viết hai truy vấn tìm hồ sơ có số record hạn mức sai và hồ sơ có số tiền lệch.'
    ], ['sql', 'owasp'])
  };

  const modules = [
    ['Nền tảng QA và thiết kế test', 'Nhận diện failure, lập test case từ yêu cầu, review rule và dùng decision table, EP/BVA, state transition.'],
    ['Kiểm thử theo rủi ro và dữ liệu SQL', 'Từ luồng ngoại lệ và QR sang phân tích kết quả bằng SELECT, JOIN và aggregate.'],
    ['API, test tích hợp và kiến trúc thanh toán', 'Đọc hợp đồng HTTP/JSON, kiểm Postman, lần dấu một giao dịch qua nhiều hệ thống và phân biệt các cấp độ kiểm thử.'],
    ['Kiểm thử nghiệp vụ Banking', 'Áp dụng kỹ thuật vào tiết kiệm, đối soát, tín dụng, eKYC và quyền API bằng dữ liệu giả lập.'],
    ['Bảo mật, hiệu năng và tự động hóa', 'Từ risk checklist sang JMeter, Newman và Playwright. Chọn lớp kiểm, dữ liệu và cách đánh giá kết quả.'],
    ['Quản lý kiểm thử và bài tổng hợp', 'Đưa test vào CI, lập kế hoạch, ước lượng, review testware và tổng hợp evidence cho quyết định phát hành.']
  ];

  for (const week of window.CURRICULUM.weeks) {
    const moduleNumber = Number(/^QA([1-6])D1$/.exec(week.days[0]?.id)?.[1]);
    if (!moduleNumber) continue;
    const [title, description] = modules[moduleNumber - 1];
    week.title = title;
    week.intro = [note(description), note('Nguồn nền tảng là ISTQB Certified Tester Foundation Level Syllabus v4.0.1 (© ISTQB). Các bài thực hành kỹ thuật và Banking dùng tình huống mô phỏng.')];
    for (const day of week.days) {
      const material = lessons[day.id];
      if (!material || !day.studyFlow) continue;
      const [, [theory], [example], [practice], [review]] = day.studyFlow;
      const section = day.sections[theory];
      section.guideLabel = 'Khái niệm và cách áp dụng';
      section.blocks = blocks(material.theory);
      section.sources = [
        ['ISTQB CTFL v4.0.1 · ' + material.reference, ctfl],
        ...material.extra.map(key => sources[key])
      ];
      day.sections[example].blocks = blocks(material.example);
      day.sections[review].guideLabel = 'Lời giải và cách tự kiểm';
      day.sections[review].blocks = blocks(material.review);
      if (material.practice) {
        for (const [index, text] of [material.practice].flat().entries()) {
          day.sections[practice].blocks[index].text = text;
        }
      }
    }
  }
})();
