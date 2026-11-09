/* Short Vietnamese definitions. Keys are stable lesson IDs. */
window.CodeDefinitions = {
  // QA Banking · Foundations and test design
  QA1D1: [
    ['Error · Sai sót của con người', 'Hành động hoặc quyết định sai của con người dẫn đến kết quả không đúng.'],
    ['Defect / Bug · Khiếm khuyết', 'Điểm sai hoặc thiếu khiến một sản phẩm công việc, như đặc tả hoặc mã nguồn, không đáp ứng yêu cầu.'],
    ['Failure · Hành vi sai khi chạy', 'Lần hệ thống thực hiện sai hoặc không thực hiện chức năng được yêu cầu khi vận hành.'],
    ['Root cause · Nguyên nhân gốc', 'Lý do nền tảng khiến vấn đề phát sinh.']
  ],
  QA1D2: [
    ['Test case · Ca kiểm thử', 'Tiền điều kiện, dữ liệu, thao tác, kết quả mong đợi và hậu điều kiện nếu có cho một lần kiểm thử.'],
    ['Test basis · Cơ sở kiểm thử', 'Thông tin dùng để phân tích và thiết kế ca kiểm thử, như yêu cầu hoặc tiêu chí chấp nhận.'],
    ['Expected result · Kết quả mong đợi', 'Hành vi cần xảy ra theo căn cứ kiểm thử với dữ liệu và điều kiện đã chọn.'],
    ['Actual result · Kết quả thực tế', 'Hành vi quan sát được khi thực hiện ca kiểm thử.']
  ],
  QA1D3: [
    ['BRD · Tài liệu yêu cầu nghiệp vụ', 'Tài liệu mô tả mục tiêu, nhu cầu và quy tắc nghiệp vụ cần đáp ứng.'],
    ['SRS · Đặc tả yêu cầu phần mềm', 'Tài liệu mô tả hành vi và các yêu cầu mà phần mềm phải đáp ứng.'],
    ['Decision table · Bảng quyết định', 'Bảng nối từng tổ hợp điều kiện với hành động hoặc kết quả tương ứng.']
  ],
  QA1D4: [
    ['EP · Phân vùng tương đương', 'Kỹ thuật chia dữ liệu thành các nhóm mà hệ thống dự kiến xử lý giống nhau, rồi chọn giá trị đại diện.'],
    ['BVA · Phân tích giá trị biên', 'Kỹ thuật chọn giá trị tại và sát ranh giới của các phân vùng có thứ tự.'],
    ['Coverage · Độ bao phủ', 'Tỷ lệ phần tử cần kiểm đã được kiểm theo kỹ thuật đang dùng.']
  ],
  QA1D5: [
    ['State · Trạng thái', 'Tình trạng hiện tại của đối tượng, quyết định nó có thể phản ứng thế nào với sự kiện.'],
    ['Event · Sự kiện', 'Tác nhân có thể kích hoạt chuyển đổi, như gửi lệnh hoặc phê duyệt.'],
    ['Guard · Điều kiện cho phép', 'Điều kiện phải thỏa để chuyển đổi xảy ra khi có sự kiện.'],
    ['State transition · Chuyển trạng thái', 'Thay đổi từ trạng thái nguồn sang trạng thái đích khi sự kiện và điều kiện phù hợp.']
  ],
  // QA Banking · Risk and SQL
  QA2D1: [
    ['Main flow · Luồng chính', 'Chuỗi bước thông thường để đạt mục tiêu của người dùng.'],
    ['Alternative flow · Luồng thay thế', 'Nhánh khác của quy trình được yêu cầu cho một lựa chọn hoặc điều kiện cụ thể.'],
    ['Exception flow · Luồng ngoại lệ', 'Nhánh xử lý khi có lỗi hoặc trở ngại làm gián đoạn luồng đang thực hiện.']
  ],
  QA2D2: [
    ['Test condition · Điều kiện kiểm thử', 'Một khía cạnh có thể kiểm tra của sản phẩm, như hết hạn hoặc sai quyền.'],
    ['Risk-based testing · Kiểm thử theo rủi ro', 'Chọn phạm vi và thứ tự kiểm theo khả năng xảy ra và mức tác động của rủi ro sản phẩm.']
  ],
  QA2D3: [
    ['SQL · Ngôn ngữ truy vấn có cấu trúc', 'Ngôn ngữ dùng để khai báo, truy vấn và thao tác dữ liệu trong hệ quản trị cơ sở dữ liệu quan hệ.'],
    ['SELECT', 'Chỉ định dữ liệu cần trả về từ truy vấn.'],
    ['WHERE', 'Lọc từng dòng theo điều kiện.']
  ],
  QA2D4: [
    ['JOIN · Phép nối', 'Kết hợp dòng từ hai nguồn dữ liệu theo điều kiện nối.'],
    ['INNER JOIN', 'Trả về các cặp dòng thỏa điều kiện nối.'],
    ['LEFT JOIN', 'Giữ mọi dòng bên trái và điền NULL cho cột bên phải nếu không có dòng khớp.']
  ],
  QA2D5: [
    ['Hàm tổng hợp · Aggregate', 'Tính một kết quả từ tập giá trị, như COUNT để đếm hoặc SUM để cộng.'],
    ['GROUP BY', 'Gom các dòng có cùng giá trị khóa nhóm trước khi tính kết quả theo nhóm.'],
    ['HAVING', 'Lọc kết quả ở cấp nhóm sau khi nhóm và tổng hợp.'],
    ['Lệch sổ cái', 'Chênh lệch giữa số liệu ghi sổ và số liệu đối chiếu trong cùng phạm vi, kỳ và đơn vị tiền.']
  ],
  // QA Banking · API and integration
  QA3D1: [
    ['API · Giao diện lập trình ứng dụng', 'Giao diện quy định cách một hệ thống gọi chức năng hoặc trao đổi dữ liệu với hệ thống khác.'],
    ['REST', 'Kiểu kiến trúc hệ thống phân tán dùng giao diện thống nhất cho tài nguyên và xử lý yêu cầu theo cách phi trạng thái.'],
    ['JSON', 'Định dạng văn bản biểu diễn dữ liệu như đối tượng, mảng, chuỗi và số.']
  ],
  QA3D2: [
    ['HTTP header', 'Trường tên và giá trị mang thông tin bổ sung của yêu cầu hoặc phản hồi HTTP.'],
    ['Path / query parameter', 'Path parameter nằm trong đường dẫn. Query parameter nằm sau dấu ? trong URL.'],
    ['Access token', 'Thông tin xác thực được trình cho API để yêu cầu truy cập trong phạm vi được cấp.']
  ],
  QA3D3: [
    ['Test script', 'Đoạn mã thực hiện thao tác hoặc kiểm tra để chạy ca thử tự động.'],
    ['Assertion · Phép khẳng định', 'Phép kiểm một điều kiện mong đợi, như status bằng 200 hoặc giá trị thực tế bằng giá trị yêu cầu.'],
    ['Post-response script', 'Đoạn mã Postman chạy sau khi nhận phản hồi để xử lý dữ liệu hoặc kiểm tra kết quả.']
  ],
  QA3D4: [
    ['HTTP 500 · Internal Server Error', 'Mã phản hồi cho biết máy chủ gặp tình huống bất ngờ khiến yêu cầu không thể được đáp ứng.'],
    ['Correlation ID', 'Mã dùng để nối các log hoặc sự kiện thuộc cùng một yêu cầu qua nhiều thành phần.'],
    ['Integration test · Kiểm thử tích hợp', 'Kiểm tra giao diện và tương tác giữa các thành phần hoặc hệ thống đã kết nối.']
  ],
  QA3D5: [
    ['Core Banking', 'Hệ thống lõi quản lý nghiệp vụ như tài khoản, số dư và bút toán.'],
    ['Payment Gateway', 'Lớp tiếp nhận và chuyển thông điệp thanh toán sang bộ xử lý hoặc mạng thanh toán.'],
    ['System integration testing', 'Kiểm tra các giao diện và tương tác giữa hệ thống đang kiểm và các hệ thống, dịch vụ khác.']
  ],
  // QA Banking · Business and security
  QA4D1: [
    ['CASA · Current Account, Savings Account', 'Nhóm tài khoản thanh toán và tiết kiệm không kỳ hạn trong ngữ cảnh bài.'],
    ['Term deposit · Tiền gửi có kỳ hạn', 'Khoản gửi có kỳ hạn và điều kiện tính lãi theo thỏa thuận.'],
    ['Tất toán tiền gửi', 'Kết thúc khoản tiền gửi và xử lý gốc, lãi theo điều kiện áp dụng.']
  ],
  QA4D2: [
    ['Timeout · Hết thời gian chờ', 'Bên gọi chưa nhận phản hồi trong thời gian chờ đã đặt.'],
    ['Reconciliation · Đối soát', 'So khớp dữ liệu từ các nguồn liên quan để phát hiện giao dịch thiếu, thừa hoặc sai lệch.'],
    ['Idempotency · Tính lũy đẳng', 'Lặp lại cùng yêu cầu có hiệu lực dự kiến như thực hiện một lần.']
  ],
  QA4D3: [
    ['Credit limit · Hạn mức tín dụng', 'Mức tín dụng tối đa được cấp theo điều kiện của sản phẩm.'],
    ['Statement balance · Dư nợ sao kê', 'Số dư nợ được ghi nhận tại thời điểm chốt kỳ sao kê.'],
    ['Minimum payment · Số tiền thanh toán tối thiểu', 'Số tiền tối thiểu phải trả cho kỳ sao kê theo quy tắc sản phẩm.']
  ],
  QA4D4: [
    ['eKYC', 'Quy trình định danh và xác minh danh tính khách hàng qua kênh điện tử.'],
    ['Liveness detection', 'Phép kiểm xem đầu vào sinh trắc đến từ người thật đang có mặt.'],
    ['AML · Chống rửa tiền', 'Các biện pháp phòng ngừa, phát hiện và xử lý rủi ro rửa tiền.']
  ],
  QA4D5: [
    ['Penetration testing · Kiểm thử xâm nhập', 'Hoạt động kiểm thử có phạm vi được phép, mô phỏng tấn công để đánh giá khả năng khai thác điểm yếu.'],
    ['Authentication · Xác thực', 'Xác minh danh tính của người dùng hoặc hệ thống gửi yêu cầu.'],
    ['Authorization · Phân quyền', 'Quyết định danh tính đã được xác định có quyền thực hiện hành động hoặc truy cập dữ liệu nào.'],
    ['BOLA · Lỗi phân quyền cấp đối tượng', 'API để người gọi truy cập hoặc sửa đối tượng cụ thể ngoài quyền được cấp.']
  ],
  // QA Banking · Performance and automation
  QA5D1: [
    ['Hạn mức khả dụng', 'Phần hạn mức tín dụng còn có thể sử dụng theo trạng thái và quy tắc sản phẩm.'],
    ['Phê duyệt hạn mức', 'Quyết định cấp hoặc điều chỉnh mức tín dụng theo thẩm quyền và điều kiện duyệt.'],
    ['Negative test · Ca kiểm thử âm', 'Ca dùng đầu vào, trạng thái hoặc quyền ngoài điều kiện cho phép để kiểm cách hệ thống xử lý.']
  ],
  QA5D2: [
    ['Performance testing · Kiểm thử hiệu năng', 'Đo cách hệ thống đáp ứng yêu cầu về tốc độ, tải và tài nguyên dưới điều kiện xác định.'],
    ['Response time · Thời gian phản hồi', 'Thời gian từ lúc gửi yêu cầu đến lúc nhận xong phản hồi theo cách đo đã chọn.'],
    ['Throughput · Thông lượng', 'Số yêu cầu hoặc giao dịch xử lý được trong một đơn vị thời gian.'],
    ['p95', 'Giá trị phân vị 95, nghĩa là khoảng 95% phép đo nằm ở mức đó hoặc thấp hơn.']
  ],
  QA5D3: [
    ['Postman collection', 'Tập hợp request có thể lưu và chạy lại cùng cấu hình hoặc test script.'],
    ['Newman', 'Công cụ dòng lệnh để chạy collection Postman và tạo báo cáo kết quả.'],
    ['Exit code · Mã thoát', 'Mã do chương trình trả cho hệ điều hành để báo kết quả khi kết thúc.']
  ],
  QA5D4: [
    ['UI automation · Tự động hóa kiểm thử giao diện', 'Dùng mã để thao tác giao diện và kiểm kết quả quan sát được.'],
    ['Locator', 'Cách Playwright tìm phần tử giao diện dựa trên vai trò, tên hoặc tiêu chí khác.'],
    ['Auto-waiting', 'Playwright tự chờ phần tử đủ điều kiện trước khi thực hiện thao tác.'],
    ['Assertion', 'Phép kiểm rằng trạng thái giao diện đáp ứng kỳ vọng của ca thử.']
  ],
  QA5D5: [
    ['POM · Page Object Model', 'Mẫu tổ chức test UI đưa cách tìm phần tử và thao tác của từng trang vào Page Object.'],
    ['Page Object', 'Đối tượng cung cấp thao tác theo ngôn ngữ nghiệp vụ cho một trang hoặc phần giao diện.']
  ],
  // QA Banking · Test management
  QA6D1: [
    ['CI · Tích hợp liên tục', 'Tích hợp thay đổi thường xuyên và tự chạy kiểm tra để phát hiện vấn đề sớm.'],
    ['Workflow', 'Quy trình tự động gồm một hoặc nhiều job, được kích hoạt theo sự kiện hoặc lịch.'],
    ['Runner', 'Môi trường thực thi các bước trong một job.']
  ],
  QA6D2: [
    ['Test strategy · Chiến lược kiểm thử', 'Định hướng cấp cao về cách tổ chức và ưu tiên kiểm thử.'],
    ['Test plan · Kế hoạch kiểm thử', 'Mô tả mục tiêu, phạm vi, cách tiếp cận, nguồn lực và lịch cho một hoạt động kiểm thử.'],
    ['Entry / exit criteria', 'Điều kiện cần đạt để bắt đầu hoặc kết thúc một hoạt động kiểm thử.']
  ],
  QA6D3: [
    ['Test estimation · Ước lượng kiểm thử', 'Dự đoán công sức hoặc thời gian cần cho các hoạt động kiểm thử.'],
    ['Product risk · Rủi ro sản phẩm', 'Khả năng chất lượng sản phẩm gây tác động bất lợi khi sử dụng.'],
    ['Project risk · Rủi ro dự án', 'Yếu tố bất định ảnh hưởng khả năng hoàn thành dự án theo mục tiêu.']
  ],
  QA6D4: [
    ['Review · Rà soát', 'Đánh giá sản phẩm công việc để phát hiện vấn đề hoặc đề xuất cải thiện.'],
    ['Test progress report · Báo cáo tiến độ kiểm thử', 'Báo cáo định kỳ về việc đã làm, sai lệch, rủi ro và bước kế tiếp.'],
    ['Test completion report · Báo cáo kết thúc kiểm thử', 'Tổng kết kết quả, độ bao phủ và rủi ro còn lại khi kết thúc hoạt động kiểm thử.']
  ],
  QA6D5: [
    ['Traceability · Truy vết', 'Liên kết yêu cầu với ca thử, kết quả và khiếm khuyết liên quan.'],
    ['Test evidence · Bằng chứng kiểm thử', 'Dữ liệu ghi lại điều thực sự quan sát được, như log, ảnh, phản hồi API hoặc truy vấn đối soát.'],
    ['Residual risk · Rủi ro còn lại', 'Mức rủi ro vẫn tồn tại sau các biện pháp giảm thiểu đã thực hiện.']
  ],
  // W1 · Software foundations
  W1D1: [
    ['Program · Chương trình', 'Tập hợp chỉ dẫn để máy tính thực hiện một công việc.'],
    ['Source code · Mã nguồn', 'Chỉ dẫn được viết bằng ngôn ngữ lập trình để con người đọc và sửa.'],
    ['Interpreter · Trình thông dịch', 'Phần mềm thực thi chương trình từ mã hoặc dạng trung gian của mã.'],
    ['Runtime · Môi trường chạy', 'Môi trường cung cấp các thành phần và tài nguyên để chương trình thực thi.']
  ],
  W1D2: [
    ['Variable · Biến', 'Tên dùng để tham chiếu một giá trị trong chương trình.'],
    ['Assignment · Phép gán', 'Thao tác gắn tên với một giá trị, viết bằng dấu = trong Python.'],
    ['print()', 'Hàm hiển thị biểu diễn của giá trị ra luồng đầu ra.']
  ],
  W1D3: [
    ['int / float', 'int biểu diễn số nguyên. float biểu diễn số dấu phẩy động, có thể xấp xỉ giá trị thực.'],
    ['str / bool', 'str biểu diễn văn bản. bool biểu diễn hai giá trị logic True và False.']
  ],
  W1D4: [
    ['Arithmetic operator · Toán tử số học', 'Ký hiệu thực hiện phép tính, như + để cộng hoặc * để nhân.'],
    ['Floor division · Chia lấy sàn', 'Toán tử // cho thương được làm tròn xuống. % trả phần dư tương ứng.']
  ],
  W1D5: [
    ['Working tree · Thư mục làm việc', 'Các tệp đang có trên máy mà bạn có thể xem và sửa.'],
    ['Staging area · Vùng chuẩn bị', 'Ảnh chụp các thay đổi đã chọn cho commit tiếp theo.'],
    ['Commit', 'Bản ghi một trạng thái đã lưu của dự án trong lịch sử Git.']
  ],
  // W2 · Python control flow
  W2D1: [
    ['Comparison · Phép so sánh', 'Phép kiểm quan hệ giữa giá trị, như bằng, nhỏ hơn hoặc lớn hơn.'],
    ['Boolean operators · Toán tử logic', 'and ghép điều kiện cùng đúng, or ghép điều kiện có ít nhất một vế đúng, not đảo giá trị logic.']
  ],
  W2D2: [
    ['Conditional · Rẽ nhánh', 'Cấu trúc chọn khối lệnh theo kết quả của điều kiện.'],
    ['if / elif / else', 'Chuỗi nhánh chạy khối đầu tiên có điều kiện đúng, hoặc khối else khi các điều kiện đều sai.']
  ],
  W2D3: [
    ['for loop · Vòng lặp for', 'Lặp qua từng phần tử của một đối tượng có thể duyệt.'],
    ['Accumulator · Biến tích lũy', 'Biến giữ kết quả tạm và được cập nhật qua các lượt lặp.']
  ],
  W2D4: [
    ['while loop · Vòng lặp while', 'Lặp khối lệnh trong khi điều kiện kiểm tra còn đúng.'],
    ['Termination condition · Điều kiện dừng', 'Điều kiện hoặc sự kiện khiến vòng lặp kết thúc.']
  ],
  W2D5: [
    ['Debugging · Gỡ lỗi', 'Tái hiện hành vi sai, tìm nguyên nhân và sửa khiếm khuyết.'],
    ['Minimal reproducer · Ví dụ tái hiện tối giản', 'Đầu vào và bước ít nhất vẫn làm vấn đề xuất hiện.']
  ],
  // W3 · Python collections
  W3D1: [
    ['List · Danh sách', 'Dãy có thứ tự, truy cập được bằng chỉ số và có thể thêm, sửa hoặc xóa phần tử.']
  ],
  W3D2: [
    ['Tuple', 'Dãy có thứ tự với các vị trí cố định sau khi tạo. Một phần tử vẫn có thể tham chiếu đối tượng thay đổi được.']
  ],
  W3D3: [
    ['Dictionary · Từ điển', 'Cấu trúc ánh xạ mỗi khóa duy nhất đến một giá trị.']
  ],
  W3D4: [
    ['Set · Tập hợp', 'Tập các phần tử khác nhau, hỗ trợ kiểm thành viên và các phép hợp, giao, hiệu.']
  ],
  W3D5: [
    ['Collection · Tập dữ liệu', 'Cấu trúc lưu nhiều phần tử, như list, tuple, dictionary hoặc set.'],
    ['Edge case · Trường hợp đặc biệt', 'Đầu vào ít gặp cần kiểm riêng, như tập rỗng hoặc nhiều dòng có cùng khóa.']
  ],
  // W4 · Functions, errors and files
  W4D1: [
    ['Function · Hàm', 'Khối mã có thể gọi để thực hiện một việc và có thể trả kết quả.'],
    ['Parameter / argument', 'Parameter là tên khai báo trong hàm. Argument là giá trị được truyền khi gọi.']
  ],
  W4D2: [
    ['Scope · Phạm vi', 'Vùng trong chương trình nơi một tên có thể được tra cứu.'],
    ['Pure function · Hàm thuần', 'Hàm cho cùng kết quả với cùng đầu vào và không thay đổi trạng thái bên ngoài.']
  ],
  W4D3: [
    ['Exception · Ngoại lệ', 'Tín hiệu khi một tình huống bất thường xảy ra trong lúc thực thi.'],
    ['Exception handler · Bộ xử lý ngoại lệ', 'Khối mã tiếp nhận loại ngoại lệ đã chọn và xử lý tình huống đó.']
  ],
  W4D4: [
    ['JSON', 'Định dạng văn bản để biểu diễn dữ liệu có cấu trúc.'],
    ['Module / import', 'Module là đơn vị mã có thể dùng lại. import nạp module và đưa tên cần dùng vào phạm vi hiện tại.']
  ],
  W4D5: [
    ['Input / output contract', 'Quy ước về dữ liệu được nhận, kết quả được trả và cách xử lý đầu vào không hợp lệ.']
  ],
  // W5 · HTTP and REST
  W5D1: [
    ['Client / server', 'Client gửi yêu cầu. Server xử lý yêu cầu và gửi phản hồi.'],
    ['HTTP / HTTPS', 'HTTP quy định cách trao đổi yêu cầu và phản hồi. HTTPS truyền HTTP qua kết nối được bảo vệ bằng TLS.']
  ],
  W5D2: [
    ['URL', 'Địa chỉ tài nguyên, có thể gồm giao thức, máy chủ, đường dẫn và chuỗi truy vấn.'],
    ['Header / body', 'Header chứa các trường thông tin về thông điệp. Body chứa nội dung được truyền.']
  ],
  W5D3: [
    ['HTTP method', 'Từ khóa nêu mục đích của yêu cầu đối với tài nguyên đích, như GET, POST, PUT hoặc DELETE.'],
    ['Idempotent method · Phương thức lũy đẳng', 'Phương thức có hiệu lực dự kiến như nhau khi lặp lại cùng yêu cầu hoặc thực hiện một lần.']
  ],
  W5D4: [
    ['HTTP status code', 'Mã ba chữ số mô tả kết quả xử lý yêu cầu, như 200 cho thành công hoặc 404 khi không tìm thấy.']
  ],
  W5D5: [
    ['Request inspection · Kiểm tra yêu cầu', 'Xem method, URL, header và body thực tế đã gửi, rồi đối chiếu với hợp đồng API.'],
    ['Postman', 'Công cụ gửi yêu cầu, xem phản hồi và tổ chức ca kiểm thử API.']
  ],
  // W6 · API testing
  W6D1: [
    ['Positive test · Ca kiểm thử dương', 'Ca dùng đầu vào và điều kiện hợp lệ để kiểm hành vi mong đợi.'],
    ['Negative test · Ca kiểm thử âm', 'Ca kiểm cách hệ thống xử lý đầu vào, trạng thái hoặc quyền không hợp lệ.']
  ],
  W6D2: [
    ['Boundary value · Giá trị biên', 'Giá trị tại điểm hành vi thay đổi giữa hai vùng dữ liệu có thứ tự.'],
    ['Input validation · Kiểm tra đầu vào', 'Kiểm dữ liệu theo kiểu, giới hạn và quy tắc đã định trước khi xử lý.']
  ],
  W6D3: [
    ['Authentication · Xác thực', 'Xác minh danh tính của bên gọi.'],
    ['Authorization · Kiểm quyền', 'Xác định bên gọi có được thực hiện hành động trên tài nguyên cụ thể hay không.']
  ],
  W6D4: [
    ['API chaining · Nối request', 'Dùng kết quả của request trước làm đầu vào cho request tiếp theo.'],
    ['Persistence validation · Kiểm dữ liệu đã lưu', 'Xác nhận thay đổi còn tồn tại khi đọc lại qua API hoặc nguồn dữ liệu phù hợp.']
  ],
  W6D5: [
    ['API regression suite · Bộ kiểm thử hồi quy API', 'Tập ca chạy lại sau thay đổi để phát hiện hành vi API đang dùng bị ảnh hưởng.']
  ],
  // W7 · SQL
  W7D1: [
    ['Relational table · Bảng quan hệ', 'Tập dữ liệu gồm các dòng bản ghi và cột thuộc tính.'],
    ['Primary key / foreign key', 'Khóa chính định danh duy nhất một dòng. Khóa ngoại ràng buộc tham chiếu đến dữ liệu liên quan.']
  ],
  W7D2: [
    ['SELECT / WHERE', 'SELECT chỉ định dữ liệu trả về. WHERE lọc dòng theo điều kiện.'],
    ['ORDER BY / LIMIT', 'ORDER BY sắp xếp kết quả. LIMIT giới hạn số dòng được trả.']
  ],
  W7D3: [
    ['INSERT / UPDATE / DELETE', 'Ba lệnh SQL dùng để thêm dòng, thay đổi dòng hoặc xóa dòng khỏi bảng.']
  ],
  W7D4: [
    ['GROUP BY', 'Gom các dòng theo giá trị khóa nhóm.'],
    ['HAVING', 'Lọc nhóm theo điều kiện sau khi dữ liệu được gom nhóm.']
  ],
  W7D5: [
    ['JOIN · Phép nối', 'Kết hợp dòng từ hai nguồn theo điều kiện nối.'],
    ['INNER JOIN / LEFT JOIN', 'INNER JOIN lấy cặp dòng khớp. LEFT JOIN giữ cả dòng trái không có cặp khớp.']
  ],
  // W8 · PostgreSQL and integrity
  W8D1: [
    ['Constraint · Ràng buộc', 'Quy tắc cơ sở dữ liệu kiểm để bảo vệ tính hợp lệ của dữ liệu.']
  ],
  W8D2: [
    ['Index · Chỉ mục', 'Cấu trúc hỗ trợ tìm dữ liệu nhanh hơn cho một số truy vấn, đổi lại chi phí lưu trữ và cập nhật.']
  ],
  W8D3: [
    ['Normalization · Chuẩn hóa dữ liệu', 'Tổ chức bảng theo các quan hệ phụ thuộc để giảm lặp dữ liệu và sai lệch khi cập nhật.'],
    ['Cardinality · Lực lượng quan hệ', 'Số bản ghi có thể liên kết ở mỗi phía của quan hệ, như một-nhiều.']
  ],
  W8D4: [
    ['Transaction · Giao dịch cơ sở dữ liệu', 'Nhóm thao tác được xác nhận bằng commit hoặc hủy bằng rollback như một đơn vị.'],
    ['ACID', 'Bốn thuộc tính giao dịch gồm tính nguyên tử, nhất quán, cô lập và bền vững.'],
    ['Migration', 'Thay đổi cấu trúc hoặc dữ liệu có phiên bản và có thứ tự thực hiện.']
  ],
  W8D5: [
    ['Data invariant · Bất biến dữ liệu', 'Điều kiện phải luôn đúng trong dữ liệu hợp lệ, như mỗi mã đặt tour là duy nhất.']
  ],
  // W9 · FastAPI foundations
  W9D1: [
    ['FastAPI', 'Framework Python để xây dựng API dựa trên khai báo kiểu dữ liệu.'],
    ['Route / handler', 'Route nối method và đường dẫn với handler, tức hàm xử lý yêu cầu.']
  ],
  W9D2: [
    ['Path parameter · Tham số đường dẫn', 'Giá trị nằm trong một phần của đường dẫn, thường dùng định danh tài nguyên.'],
    ['Query parameter · Tham số truy vấn', 'Giá trị trong chuỗi truy vấn của URL, thường dùng lọc, sắp xếp hoặc phân trang.']
  ],
  W9D3: [
    ['Request body · Nội dung yêu cầu', 'Dữ liệu client gửi trong phần nội dung của yêu cầu HTTP.'],
    ['Pydantic model', 'Khai báo trường, kiểu và quy tắc để phân tích, kiểm tra hoặc chuyển đổi dữ liệu.']
  ],
  W9D4: [
    ['Response model', 'Khai báo cấu trúc và trường mà API trả ra trong nội dung phản hồi.'],
    ['Status code · Mã trạng thái', 'Giá trị cho biết kết quả xử lý yêu cầu ở cấp HTTP.']
  ],
  W9D5: [
    ['OpenAPI', 'Đặc tả có cấu trúc mô tả giao diện của API HTTP.'],
    ['Swagger UI', 'Giao diện đọc đặc tả OpenAPI và hỗ trợ thử gửi request từ tài liệu.']
  ],
  // W10 · Validation and testing
  W10D1: [
    ['Schema validation · Kiểm cấu trúc', 'Kiểm kiểu, trường bắt buộc và hình dạng của dữ liệu.'],
    ['Business validation · Kiểm quy tắc nghiệp vụ', 'Kiểm dữ liệu có được phép trong bối cảnh thực tế, như số ghế còn đủ.']
  ],
  W10D2: [
    ['HTTPException', 'Ngoại lệ FastAPI dùng để dừng xử lý và trả phản hồi HTTP với mã và chi tiết đã định.']
  ],
  W10D3: [
    ['Dependency injection · Tiêm phụ thuộc', 'Cung cấp thành phần cần dùng từ bên ngoài cho hàm hoặc đối tượng.']
  ],
  W10D4: [
    ['Middleware', 'Lớp xử lý bao quanh handler để thực hiện logic chung khi nhận yêu cầu hoặc trả phản hồi.']
  ],
  W10D5: [
    ['pytest', 'Framework Python tìm và chạy ca kiểm thử, hỗ trợ assertion và fixture.'],
    ['Fixture · Tiền đề kiểm thử', 'Hàm chuẩn bị dữ liệu hoặc tài nguyên cần dùng cho một hay nhiều ca.']
  ],
  // W11 · ORM and database integration
  W11D1: [
    ['ORM · Object-relational mapping', 'Ánh xạ đối tượng trong mã với bảng và bản ghi của cơ sở dữ liệu quan hệ.'],
    ['SQLAlchemy', 'Bộ công cụ Python làm việc với SQL, bao gồm lớp ORM.']
  ],
  W11D2: [
    ['Mapped model', 'Lớp đối tượng được SQLAlchemy ánh xạ vào cấu trúc dữ liệu quan hệ.'],
    ['Relationship', 'Thuộc tính ORM giúp truy cập đối tượng liên quan theo quan hệ đã khai báo.']
  ],
  W11D3: [
    ['CRUD', 'Bốn thao tác cơ bản với dữ liệu gồm tạo, đọc, cập nhật và xóa.'],
    ['Service layer · Lớp dịch vụ', 'Lớp gom quy tắc và thao tác nghiệp vụ cho các phần gọi nó.']
  ],
  W11D4: [
    ['Alembic', 'Công cụ quản lý phiên bản thay đổi cơ sở dữ liệu dùng với SQLAlchemy.'],
    ['Migration revision', 'Bản thay đổi có định danh, ghi các thao tác áp dụng và thứ tự so với những bản khác.']
  ],
  W11D5: [
    ['Database integration test', 'Ca kiểm chương trình tương tác với cơ sở dữ liệu và đối chiếu trạng thái thực sự được ghi.']
  ],
  // W12 · Authentication and security
  W12D1: [
    ['Authentication · Xác thực', 'Xác minh danh tính của người hoặc hệ thống.'],
    ['Authorization · Kiểm quyền', 'Xác định hành động và tài nguyên mà danh tính đó được phép sử dụng.']
  ],
  W12D2: [
    ['Password hashing · Băm mật khẩu', 'Biến đổi mật khẩu thành giá trị kiểm chứng bằng thuật toán băm mật khẩu.'],
    ['Salt', 'Giá trị ngẫu nhiên riêng được đưa vào lúc băm từng mật khẩu.']
  ],
  W12D3: [
    ['JWT · JSON Web Token', 'Định dạng token gọn để truyền một tập claims giữa các bên.'],
    ['Claim', 'Trường thông tin trong token, như người phát hành hoặc thời điểm hết hạn.']
  ],
  W12D4: [
    ['Protected route · Đường dẫn được bảo vệ', 'Route chỉ xử lý yêu cầu khi bên gọi đạt điều kiện truy cập.'],
    ['Resource ownership · Quyền sở hữu tài nguyên', 'Quan hệ xác định tài nguyên thuộc người dùng hoặc tổ chức nào.']
  ],
  W12D5: [
    ['Threat modeling · Mô hình hóa mối đe dọa', 'Xác định tài sản, đường tấn công và biện pháp kiểm soát trong một thiết kế.']
  ],
  // W13 · Watchlist
  W13D1: [
    ['User story', 'Mô tả ngắn nhu cầu từ góc nhìn người dùng và giá trị họ cần.'],
    ['Acceptance criteria · Tiêu chí chấp nhận', 'Điều kiện có thể kiểm chứng để xác nhận tính năng đáp ứng nhu cầu.']
  ],
  W13D2: [
    ['Watchlist', 'Danh sách các mã hoặc tài sản người dùng chọn để theo dõi.'],
    ['Database schema · Lược đồ dữ liệu', 'Mô tả bảng, cột, kiểu, khóa và quan hệ trong cơ sở dữ liệu.']
  ],
  W13D3: [
    ['Atomic operation · Thao tác nguyên tử', 'Thao tác có hiệu lực trọn vẹn hoặc được hủy trọn vẹn.'],
    ['User-scoped query · Truy vấn theo phạm vi người dùng', 'Truy vấn chỉ trả các dòng thuộc phạm vi mà người gọi được phép xem.']
  ],
  W13D4: [
    ['Ownership test · Ca kiểm tra quyền sở hữu', 'Ca xác minh tài nguyên chỉ truy cập được từ người dùng có quyền phù hợp.']
  ],
  W13D5: [
    ['Releasable increment · Phần tính năng có thể phát hành', 'Phần chức năng đã được hoàn thiện, kiểm thử và đạt tiêu chí phát hành.']
  ],
  // W14 · Price alerts
  W14D1: [
    ['Price alert · Cảnh báo giá', 'Thông báo được kích hoạt khi giá đáp ứng điều kiện đã cấu hình.'],
    ['Threshold crossing · Vượt ngưỡng', 'Chuyển từ một phía của ngưỡng sang phía còn lại theo quy tắc đã định.']
  ],
  W14D2: [
    ['Inclusive / exclusive boundary', 'Biên bao gồm nhận giá trị bằng ngưỡng. Biên loại trừ loại giá trị bằng ngưỡng.'],
    ['Precision · Độ chính xác biểu diễn', 'Mức chi tiết được giữ khi biểu diễn hoặc tính toán một giá trị số.']
  ],
  W14D3: [
    ['Deduplication key · Khóa chống trùng', 'Giá trị dùng để nhận diện các bản ghi hoặc sự kiện được xem là cùng một mục.'],
    ['Idempotency key · Khóa lũy đẳng', 'Mã giúp nhận ra lần gửi lại của cùng một thao tác để tránh lặp hiệu lực.']
  ],
  W14D4: [
    ['Alert configuration · Cấu hình cảnh báo', 'Quy tắc gồm đối tượng theo dõi, ngưỡng và điều kiện kích hoạt.'],
    ['Alert event · Sự kiện cảnh báo', 'Bản ghi một lần điều kiện cảnh báo được thỏa trong thời điểm cụ thể.']
  ],
  W14D5: [
    ['Replay test · Ca thử phát lại', 'Ca gửi lại cùng sự kiện để kiểm trạng thái và số lần hiệu lực sau xử lý.']
  ],
  // W15 · Background work and reliability
  W15D1: [
    ['Background job · Tác vụ nền', 'Công việc được thực hiện tách khỏi luồng phản hồi trực tiếp của yêu cầu.'],
    ['Worker · Tiến trình xử lý', 'Thành phần nhận công việc và thực thi công việc đó.']
  ],
  W15D2: [
    ['Timeout · Hết thời gian chờ', 'Giới hạn chờ đã hết trước khi nhận được kết quả cần thiết.'],
    ['Retry · Thử lại', 'Gửi hoặc chạy lại thao tác sau khi gặp lỗi có thể phục hồi.']
  ],
  W15D3: [
    ['Concurrency · Đồng thời', 'Nhiều tác vụ có khoảng thời gian thực hiện chồng lấn.'],
    ['Race condition · Lỗi tranh chấp', 'Kết quả sai phụ thuộc thứ tự hoặc thời điểm các tác vụ cùng truy cập trạng thái.']
  ],
  W15D4: [
    ['Partial failure · Thất bại một phần', 'Một phần của thao tác nhiều bước đã hoàn tất trong khi phần khác thất bại.'],
    ['Recovery · Phục hồi', 'Đưa trạng thái về mức nhất quán hoặc dịch vụ về mức hoạt động chấp nhận được.']
  ],
  W15D5: [
    ['Reliability · Độ tin cậy', 'Khả năng thực hiện chức năng yêu cầu trong một khoảng thời gian và điều kiện xác định.']
  ],
  // W16 · External APIs
  W16D1: [
    ['API key', 'Giá trị nhà cung cấp dùng để nhận diện ứng dụng, dự án hoặc tài khoản gọi API.'],
    ['Environment variable · Biến môi trường', 'Giá trị cấu hình dạng tên và giá trị được cung cấp cho tiến trình lúc chạy.']
  ],
  W16D2: [
    ['Parsing · Phân tích cú pháp', 'Chuyển dữ liệu thô theo định dạng đã biết thành cấu trúc mà chương trình đọc được.']
  ],
  W16D3: [
    ['Rate limit · Giới hạn tần suất', 'Mức tối đa cho phép đối với số yêu cầu trong một khoảng thời gian.'],
    ['Cache / TTL', 'Cache giữ kết quả để tái dùng. TTL quy định thời gian kết quả được xem còn hiệu lực.']
  ],
  W16D4: [
    ['Upstream dependency · Phụ thuộc thượng nguồn', 'Dịch vụ hoặc nguồn dữ liệu bên ngoài mà tính năng cần gọi để xử lý.']
  ],
  W16D5: [
    ['Data freshness · Độ mới dữ liệu', 'Mức cập nhật của dữ liệu so với thời điểm đo, lấy hoặc hiển thị.']
  ],
  // W17 · JavaScript fundamentals
  W17D1: [
    ['let / const', 'Cả hai khai báo tên trong phạm vi khối. let cho phép gán lại tên, const giữ nguyên liên kết đã gán.']
  ],
  W17D2: [
    ['Array · Mảng', 'Dãy phần tử có thứ tự, truy cập theo chỉ số.'],
    ['Object · Đối tượng', 'Tập các thuộc tính có khóa và giá trị.']
  ],
  W17D3: [
    ['Conditional · Rẽ nhánh', 'Chọn khối lệnh theo điều kiện.'],
    ['Loop · Vòng lặp', 'Thực hiện lặp lại khối lệnh theo điều kiện hoặc theo các phần tử cần duyệt.']
  ],
  W17D4: [
    ['Function · Hàm', 'Đơn vị mã có thể gọi với đối số và có thể trả kết quả.'],
    ['Scope · Phạm vi', 'Quy tắc xác định một tên có thể truy cập ở phần nào của mã.']
  ],
  W17D5: [
    ['Truthiness · Giá trị đúng sai theo ngữ cảnh', 'Cách ngôn ngữ quy đổi giá trị sang đúng hoặc sai khi kiểm điều kiện.']
  ],
  // W18 · JavaScript for APIs
  W18D1: [
    ['map / filter / reduce', 'map biến đổi từng phần tử. filter giữ phần tử thỏa điều kiện. reduce gộp dãy thành một kết quả.']
  ],
  W18D2: [
    ['Destructuring · Tách cấu trúc', 'Cú pháp lấy phần tử mảng hoặc thuộc tính đối tượng vào các tên riêng.'],
    ['Spread · Cú pháp trải', 'Cú pháp ... mở rộng phần tử hoặc thuộc tính vào cấu trúc mới.']
  ],
  W18D3: [
    ['JavaScript module', 'Tệp mã có phạm vi riêng và trao đổi các tên qua import hoặc export.']
  ],
  W18D4: [
    ['Promise', 'Đối tượng đại diện cho kết quả hoặc lỗi của một công việc có thể hoàn tất sau.'],
    ['fetch()', 'Hàm gửi yêu cầu mạng và trả Promise cho phản hồi.']
  ],
  W18D5: [
    ['async / await', 'async khai báo hàm trả Promise. await tạm dừng phần thực thi đó đến khi Promise được giải quyết.'],
    ['try / catch', 'try bao quanh thao tác có thể lỗi. catch xử lý ngoại lệ phát sinh trong phạm vi đó.']
  ],
  // W19 · React
  W19D1: [
    ['React component · Thành phần React', 'Đơn vị giao diện có thể dùng lại, tạo ra nội dung hiển thị từ dữ liệu nhận được.'],
    ['JSX', 'Phần mở rộng cú pháp cho phép mô tả giao diện bằng cấu trúc giống HTML trong JavaScript.']
  ],
  W19D2: [
    ['Props', 'Dữ liệu chỉ đọc mà component nhận từ bên gọi.']
  ],
  W19D3: [
    ['State · Trạng thái React', 'Dữ liệu component ghi nhớ giữa các lần render.'],
    ['useState', 'Hook trả giá trị state hiện tại cùng hàm yêu cầu cập nhật giá trị đó.']
  ],
  W19D4: [
    ['Event handler · Hàm xử lý sự kiện', 'Hàm được gọi khi xảy ra tương tác như click, nhập hoặc gửi biểu mẫu.'],
    ['Controlled input · Ô nhập có kiểm soát', 'Ô nhập có giá trị do state điều khiển và cập nhật qua sự kiện thay đổi.']
  ],
  W19D5: [
    ['Effect', 'Logic đồng bộ component với hệ thống bên ngoài, như kết nối hoặc yêu cầu mạng.'],
    ['Dependency · Giá trị phụ thuộc', 'Giá trị React theo dõi để biết khi nào cần đồng bộ lại Effect.']
  ],
  // W20 · Frontend integration
  W20D1: [
    ['Routing · Định tuyến', 'Chọn màn hình hoặc cách xử lý theo đường dẫn hiện tại.'],
    ['Protected page · Trang được bảo vệ', 'Màn hình chỉ mở khi người dùng đáp ứng điều kiện truy cập.']
  ],
  W20D2: [
    ['Session · Phiên đăng nhập', 'Trạng thái xác thực liên kết các yêu cầu của một người dùng trong một khoảng thời gian.']
  ],
  W20D3: [
    ['Loading / empty / error', 'Loading là đang chờ dữ liệu. Empty là tải thành công nhưng không có mục. Error là thao tác thất bại.']
  ],
  W20D4: [
    ['Reusable component · Thành phần tái sử dụng', 'Đơn vị giao diện có một trách nhiệm ổn định và nhận dữ liệu qua giao diện rõ ràng.']
  ],
  W20D5: [
    ['Frontend integration test', 'Ca kiểm nhiều phần giao diện phối hợp với nhau hoặc với API trong cùng luồng.']
  ],
  // W21 · LLM foundations
  W21D1: [
    ['LLM · Mô hình ngôn ngữ lớn', 'Mô hình học từ lượng lớn dữ liệu để xử lý và sinh nội dung ngôn ngữ.']
  ],
  W21D2: [
    ['Prompt', 'Đầu vào hướng dẫn mô hình thực hiện một nhiệm vụ, có thể gồm chỉ dẫn, dữ liệu và ví dụ.'],
    ['System / user instructions', 'Chỉ dẫn hệ thống đặt quy tắc chung. Chỉ dẫn người dùng mô tả yêu cầu cụ thể.']
  ],
  W21D3: [
    ['Temperature', 'Tham số điều chỉnh mức độ tập trung của phân phối xác suất khi chọn token đầu ra.']
  ],
  W21D4: [
    ['Hallucination · Thông tin bịa hoặc sai', 'Nội dung sai hoặc thiếu căn cứ do mô hình sinh ra và trình bày như sự thật.'],
    ['Grounding · Bám bằng chứng', 'Dùng dữ liệu hoặc tài liệu tham chiếu để hỗ trợ các khẳng định trong câu trả lời.']
  ],
  W21D5: [
    ['Token', 'Đơn vị mô hình xử lý, có thể là từ, phần của từ hoặc ký hiệu.'],
    ['Latency · Độ trễ', 'Thời gian từ một mốc bắt đầu đến kết quả cần đo, như từ yêu cầu đến token đầu tiên.']
  ],
  // W22 · Model output and integration
  W22D1: [
    ['Output contract · Hợp đồng đầu ra', 'Quy định cấu trúc, ý nghĩa các trường và cách biểu diễn kết quả hoặc lỗi.']
  ],
  W22D2: [
    ['Structured output · Đầu ra có cấu trúc', 'Kết quả tuân theo định dạng đã khai báo để chương trình đọc và kiểm được.'],
    ['JSON Schema', 'Bộ từ khóa mô tả cấu trúc và ràng buộc của dữ liệu JSON.']
  ],
  W22D3: [
    ['Few-shot prompting', 'Đưa vài cặp ví dụ vào prompt để minh họa hành vi hoặc định dạng mong đợi.']
  ],
  W22D4: [
    ['Model adapter · Lớp kết nối mô hình', 'Thành phần chuyển dữ liệu và lỗi giữa hợp đồng của ứng dụng và API của mô hình.']
  ],
  W22D5: [
    ['Evidence display · Hiển thị bằng chứng', 'Phần giao diện cho người dùng xem thông tin hỗ trợ kết quả và mở được nguồn gốc.']
  ],
  // W23 · AI evaluation
  W23D1: [
    ['Evaluation dimension · Tiêu chí đánh giá', 'Khía cạnh cần đo bằng quy tắc rõ, như độ đúng, độ bao phủ hoặc độ trễ.']
  ],
  W23D2: [
    ['Evaluation dataset · Bộ dữ liệu đánh giá', 'Tập tình huống có đầu vào và kỳ vọng hoặc tiêu chí chấm được xác định.']
  ],
  W23D3: [
    ['Schema validation · Kiểm tra schema', 'Đối chiếu cấu trúc và giá trị của dữ liệu với các ràng buộc đã khai báo.']
  ],
  W23D4: [
    ['Claim-level grounding', 'Đối chiếu từng khẳng định trong câu trả lời với bằng chứng tương ứng.']
  ],
  W23D5: [
    ['Prompt regression · Hồi quy prompt', 'Sự suy giảm ở hành vi đã đạt trước đó sau khi thay đổi prompt.']
  ],
  // W24 · AI reliability, safety and operations
  W24D1: [
    ['Prompt injection', 'Nội dung đầu vào cố tác động để mô hình làm theo chỉ dẫn ngoài phạm vi được phép.'],
    ['Adversarial input · Đầu vào đối kháng', 'Dữ liệu được cố ý tạo để kích hoạt hành vi sai hoặc vượt giới hạn.']
  ],
  W24D2: [
    ['Fallback · Phương án dự phòng', 'Hành vi thay thế được kích hoạt khi cách xử lý chính thất bại.'],
    ['Graceful degradation · Giảm chức năng có kiểm soát', 'Duy trì phần dịch vụ hữu ích khi một thành phần gặp vấn đề.']
  ],
  W24D3: [
    ['Observability · Khả năng quan sát hệ thống', 'Khả năng suy ra tình trạng và hành vi hệ thống từ các tín hiệu như log, metric và trace.']
  ],
  W24D4: [
    ['Cost budget · Ngân sách chi phí', 'Giới hạn chi phí được cấp cho một phạm vi, như mỗi yêu cầu hoặc mỗi tài khoản.']
  ],
  W24D5: [
    ['Release gate · Điều kiện phát hành', 'Tiêu chí phải đạt trước khi cho phép phát hành một phiên bản.']
  ],
  // W25 · Learning system design
  W25D1: [
    ['Learning loop · Vòng lặp học tập', 'Chu trình học, thực hành, nhận phản hồi và dùng phản hồi để chọn việc học tiếp theo.']
  ],
  W25D2: [
    ['Knowledge base · Kho kiến thức', 'Tập nội dung được tổ chức để tìm và sử dụng lại.'],
    ['Provenance · Nguồn gốc dữ liệu', 'Thông tin cho biết nội dung đến từ đâu, ở phiên bản nào và được xử lý ra sao.']
  ],
  W25D3: [
    ['Lesson schema · Lược đồ bài học', 'Quy định các trường và quan hệ lưu mục tiêu, nội dung, ví dụ, câu hỏi và nguồn tham khảo.']
  ],
  W25D4: [
    ['Question version · Phiên bản câu hỏi', 'Bản xác định của nội dung, lựa chọn và đáp án dùng để chấm một lượt làm.']
  ],
  W25D5: [
    ['Learning outcome · Kết quả học tập', 'Việc người học có thể thực hiện và được quan sát hoặc kiểm chứng sau bài.']
  ],
  // W26 · Lesson and quiz implementation
  W26D1: [
    ['Lesson API', 'Giao diện để ứng dụng yêu cầu và nhận dữ liệu bài học theo định danh hoặc truy vấn.']
  ],
  W26D2: [
    ['Quiz attempt · Lượt làm bài', 'Bản ghi một lần người học trả lời bộ câu hỏi cụ thể.']
  ],
  W26D3: [
    ['Scoring rule · Quy tắc chấm điểm', 'Cách chuyển câu trả lời và đáp án của phiên bản bài thành điểm và phản hồi.']
  ],
  W26D4: [
    ['Progress indicator · Chỉ báo tiến độ', 'Thành phần giao diện cho biết người học đang ở bước nào và đã hoàn thành bao nhiêu.']
  ],
  W26D5: [
    ['Lifecycle test · Ca kiểm vòng đời', 'Ca kiểm chuyển đổi giữa các trạng thái như bắt đầu, nộp và xem lại lượt làm.']
  ],
  // W27 · Personalization
  W27D1: [
    ['Progress level · Mức tiến độ', 'Trạng thái học được xác định từ bằng chứng đã thực hành hoặc hoàn thành theo quy tắc.']
  ],
  W27D2: [
    ['Learning signal · Tín hiệu học tập', 'Dữ liệu quan sát như lỗi lặp lại hoặc số lần thử, dùng để suy ra nội dung cần ôn.']
  ],
  W27D3: [
    ['Recommendation rule · Quy tắc đề xuất', 'Điều kiện và hành động xác định bài hoặc khái niệm nào nên gợi ý tiếp.']
  ],
  W27D4: [
    ['Attempt history · Lịch sử lượt làm', 'Tập các lượt đã ghi lại theo thời gian.'],
    ['Progress snapshot · Ảnh chụp tiến độ', 'Tóm tắt trạng thái hiện tại của người học được tính hoặc cập nhật từ dữ liệu học tập.']
  ],
  W27D5: [
    ['Recommendation boundary · Ranh giới đề xuất', 'Ngưỡng hoặc điều kiện mà tại đó hệ thống đổi nội dung gợi ý.']
  ],
  // W28 · Learning system integration
  W28D1: [
    ['Concept extraction · Trích xuất khái niệm', 'Nhận diện thuật ngữ hoặc chủ đề có thể dùng làm đầu vào cho việc chọn bài học.']
  ],
  W28D2: [
    ['Concept-to-lesson mapping', 'Quy tắc nối một khái niệm với các bài dạy khái niệm đó.']
  ],
  W28D3: [
    ['Progress update · Cập nhật tiến độ', 'Thay đổi trạng thái học dựa trên một lượt làm đã được xác minh.']
  ],
  W28D4: [
    ['E2E test · Kiểm thử đầu cuối', 'Kiểm một hành trình đầy đủ qua các phần hệ thống liên quan để xác nhận đầu ra của người dùng.']
  ],
  W28D5: [
    ['Milestone · Mốc hoàn thành', 'Kết quả trung gian có tiêu chí và bằng chứng để xác nhận đã đạt.']
  ],
  // W29 · Docker and configuration
  W29D1: [
    ['Configuration · Cấu hình', 'Tập giá trị điều khiển hành vi ứng dụng, như địa chỉ dịch vụ và chế độ chạy.'],
    ['Environment variable · Biến môi trường', 'Cặp tên và giá trị được cung cấp cho tiến trình, thường để đưa cấu hình vào lúc chạy.']
  ],
  W29D2: [
    ['Docker image', 'Gói chỉ đọc chứa tệp và chỉ dẫn cần để tạo container.'],
    ['Container', 'Phiên chạy được tạo từ image, với môi trường và trạng thái riêng.']
  ],
  W29D3: [
    ['Docker Compose', 'Công cụ khai báo và chạy nhiều dịch vụ container của một ứng dụng từ cấu hình chung.']
  ],
  W29D4: [
    ['Port mapping · Ánh xạ cổng', 'Quy tắc chuyển lưu lượng từ cổng máy chủ đến cổng bên trong container.'],
    ['Container log', 'Nội dung tiến trình trong container ghi ra, dùng để quan sát quá trình khởi động và xử lý.']
  ],
  W29D5: [
    ['Containerized test environment', 'Môi trường chạy test với công cụ và dịch vụ phụ thuộc được đóng gói trong container.']
  ],
  // W30 · GitHub Actions
  W30D1: [
    ['CI · Tích hợp liên tục', 'Tích hợp thay đổi thường xuyên và tự chạy kiểm tra để phản hồi sớm.']
  ],
  W30D2: [
    ['Workflow · Quy trình tự động', 'Tập một hoặc nhiều job được chạy theo sự kiện, lịch hoặc yêu cầu thủ công.'],
    ['Job / step', 'Job là đơn vị chạy trên runner. Step là một việc cụ thể trong job.']
  ],
  W30D3: [
    ['Lint / test / build', 'Lint kiểm quy tắc mã. Test kiểm hành vi. Build tạo đầu ra có thể chạy hoặc phát hành.'],
    ['Quality gate · Điều kiện chất lượng', 'Điều kiện kiểm tra phải đạt trước khi được đi tiếp trong quy trình.']
  ],
  W30D4: [
    ['Secret · Thông tin bí mật', 'Giá trị cần hạn chế truy cập, như mật khẩu, token hoặc khóa API.'],
    ['Least privilege · Quyền tối thiểu', 'Chỉ cấp các quyền cần để hoàn thành nhiệm vụ.']
  ],
  W30D5: [
    ['Exit code · Mã thoát', 'Mã chương trình trả khi kết thúc, dùng để phân biệt thành công và các kết quả lỗi.']
  ],
  // W31 · Deployment and monitoring
  W31D1: [
    ['Deployment topology · Sơ đồ triển khai', 'Cách thành phần chạy được bố trí và kết nối trong môi trường thực thi.']
  ],
  W31D2: [
    ['Liveness check · Kiểm còn hoạt động', 'Kiểm tiến trình còn sống và có thể tiếp tục chạy.'],
    ['Readiness check · Kiểm sẵn sàng', 'Kiểm dịch vụ đã đủ điều kiện nhận và xử lý lưu lượng.']
  ],
  W31D3: [
    ['Structured log · Log có cấu trúc', 'Bản ghi sự kiện theo trường ổn định để lọc, tìm và đối chiếu bằng máy.']
  ],
  W31D4: [
    ['Metric · Chỉ số đo', 'Giá trị số theo dõi một khía cạnh hệ thống qua thời gian.'],
    ['Error rate · Tỷ lệ lỗi', 'Tỷ lệ hoạt động gặp lỗi trong tổng số hoạt động được đo cùng phạm vi.']
  ],
  W31D5: [
    ['Backup · Bản sao lưu', 'Bản sao dữ liệu dùng để phục hồi khi dữ liệu chính bị mất hoặc hỏng.'],
    ['Rollback · Quay lui', 'Đưa ứng dụng hoặc cấu hình về trạng thái hoạt động trước một thay đổi.']
  ],
  // W32 · Security and production
  W32D1: [
    ['BOLA · Lỗi phân quyền cấp đối tượng', 'API cho người gọi sử dụng đối tượng cụ thể ngoài quyền của họ.'],
    ['BFLA · Lỗi phân quyền cấp chức năng', 'API cho người gọi thực hiện chức năng ngoài quyền được cấp.']
  ],
  W32D2: [
    ['Rate limiting · Giới hạn tần suất', 'Kiểm số yêu cầu theo đối tượng và khoảng thời gian để giới hạn mức sử dụng.']
  ],
  W32D3: [
    ['Workload profile · Hồ sơ tải', 'Mô tả số lượng, loại và nhịp gửi yêu cầu trong phép đo hiệu năng.'],
    ['Latency / throughput', 'Latency đo thời gian một yêu cầu. Throughput đo số yêu cầu hoặc giao dịch trong một đơn vị thời gian.']
  ],
  W32D4: [
    ['Production incident · Sự cố vận hành', 'Sự kiện làm gián đoạn hoặc giảm chất lượng dịch vụ đang được sử dụng.']
  ],
  W32D5: [
    ['Security / performance regression', 'Biện pháp bảo vệ hoặc chỉ số hiệu năng suy giảm sau một thay đổi.']
  ],
  // W33 · Architecture and documentation
  W33D1: [
    ['Modular monolith · Khối triển khai có mô-đun', 'Ứng dụng triển khai như một đơn vị, với các phần bên trong chia theo trách nhiệm rõ ràng.']
  ],
  W33D2: [
    ['ERD · Sơ đồ thực thể–quan hệ', 'Sơ đồ mô tả thực thể, thuộc tính và cách các thực thể liên kết.'],
    ['Cardinality · Lực lượng quan hệ', 'Số bản ghi có thể liên kết ở mỗi phía của một quan hệ.']
  ],
  W33D3: [
    ['API documentation · Tài liệu API', 'Mô tả cách gọi API, quyền cần có, dữ liệu vào và các kết quả có thể nhận.']
  ],
  W33D4: [
    ['README', 'Tệp giới thiệu dự án và chỉ cách chuẩn bị, chạy hoặc kiểm thử.']
  ],
  W33D5: [
    ['ADR · Bản ghi quyết định kiến trúc', 'Tài liệu ngắn ghi bối cảnh, quyết định kỹ thuật và hệ quả của quyết định.']
  ],
  // W34 · Product and UX
  W34D1: [
    ['Usability · Tính dễ sử dụng', 'Mức người dùng cụ thể hoàn thành được nhiệm vụ hiệu quả và thuận tiện trong bối cảnh xác định.']
  ],
  W34D2: [
    ['User interview · Phỏng vấn người dùng', 'Trao đổi có mục tiêu để hiểu nhu cầu, bối cảnh và hành vi của người dùng.'],
    ['Problem validation · Kiểm chứng vấn đề', 'Dùng bằng chứng để xác định vấn đề có thật và đáng giải quyết.']
  ],
  W34D3: [
    ['Product metric · Chỉ số sản phẩm', 'Phép đo định lượng về hành vi hoặc kết quả sử dụng sản phẩm.'],
    ['Conversion rate · Tỷ lệ chuyển đổi', 'Tỷ lệ đối tượng đạt hành động mục tiêu trong nhóm đủ điều kiện đã định.']
  ],
  W34D4: [
    ['Cost per user · Chi phí mỗi người dùng', 'Tổng chi phí trong phạm vi đo chia cho số người dùng tương ứng.'],
    ['Unit economics · Kinh tế trên mỗi đơn vị', 'Cách phân tích doanh thu và chi phí theo một đơn vị như người dùng hoặc giao dịch.']
  ],
  W34D5: [
    ['Prioritization · Xếp ưu tiên', 'Sắp thứ tự công việc theo giá trị, rủi ro, công sức và các ràng buộc đã biết.']
  ],
  // W35 · Portfolio and interviews
  W35D1: [
    ['Portfolio · Hồ sơ dự án', 'Tập hợp sản phẩm và bằng chứng thể hiện vai trò, cách giải quyết vấn đề và kết quả.']
  ],
  W35D2: [
    ['Request lifecycle · Vòng đời yêu cầu', 'Chuỗi bước từ lúc máy chủ nhận yêu cầu đến khi xử lý và trả phản hồi.']
  ],
  W35D3: [
    ['Test oracle · Căn cứ xác định kết quả đúng', 'Nguồn hoặc quy tắc dùng để xác định kết quả mong đợi của ca thử.']
  ],
  W35D4: [
    ['Evaluation rubric · Thang tiêu chí đánh giá', 'Danh sách tiêu chí và mức đạt giúp chấm kết quả theo cách nhất quán.']
  ],
  W35D5: [
    ['System design · Thiết kế hệ thống', 'Xác định thành phần, luồng dữ liệu và cách chúng phối hợp để đáp ứng mục tiêu và ràng buộc.']
  ],
  // W36 · Release and demonstration
  W36D1: [
    ['Regression plan · Kế hoạch kiểm thử hồi quy', 'Phạm vi và thứ tự kiểm lại các hành vi có thể bị ảnh hưởng bởi thay đổi.']
  ],
  W36D2: [
    ['Secret exposure · Lộ thông tin bí mật', 'Tình trạng token, mật khẩu hoặc khóa bị người ngoài phạm vi cho phép truy cập.']
  ],
  W36D3: [
    ['Smoke test · Kiểm tra nhanh sau triển khai', 'Tập ca ngắn xác nhận chức năng thiết yếu của bản vừa triển khai chạy được.']
  ],
  W36D4: [
    ['Reproducible demo · Demo tái lập được', 'Bản trình diễn có môi trường, dữ liệu và bước đủ rõ để người khác chạy lại.']
  ],
  W36D5: [
    ['Retrospective · Buổi nhìn lại', 'Buổi xem lại kết quả và cách làm để chọn thay đổi cụ thể cho chu kỳ sau.']
  ],
  // W37 · RAG foundations
  W37D1: [
    ['Embedding', 'Biểu diễn đầu vào thành một vector số để có thể tính mức tương đồng.']
  ],
  W37D2: [
    ['Chunking · Chia đoạn', 'Tách tài liệu thành các phần có thể lập chỉ mục và tìm lại độc lập.']
  ],
  W37D3: [
    ['Vector database · Cơ sở dữ liệu vector', 'Kho lưu vector và hỗ trợ truy vấn theo độ tương đồng.']
  ],
  W37D4: [
    ['Retrieval · Truy xuất', 'Tìm các tài liệu hoặc đoạn có khả năng liên quan với truy vấn.'],
    ['Reranking · Xếp hạng lại', 'Sắp lại các ứng viên đã truy xuất theo đánh giá mức liên quan.']
  ],
  W37D5: [
    ['Grounded generation · Sinh câu trả lời có căn cứ', 'Tạo câu trả lời dựa trên bằng chứng có sẵn để hỗ trợ các khẳng định.']
  ],
  // W38 · RAG implementation
  W38D1: [
    ['Ingestion pipeline · Luồng nạp dữ liệu', 'Chuỗi bước nhận, kiểm tra, chuẩn bị và lập chỉ mục dữ liệu để truy xuất.']
  ],
  W38D2: [
    ['Query pipeline · Luồng xử lý truy vấn', 'Chuỗi bước nhận câu hỏi, tìm bằng chứng và tạo phản hồi từ kết quả tìm được.']
  ],
  W38D3: [
    ['Metadata · Siêu dữ liệu', 'Thông tin mô tả nội dung, như nguồn, phiên bản, chủ sở hữu hoặc quyền truy cập.'],
    ['Access filter · Bộ lọc quyền truy cập', 'Điều kiện giới hạn nội dung có thể truy xuất theo quyền người gọi.']
  ],
  W38D4: [
    ['RAG endpoint', 'Điểm gọi API nhận câu hỏi và trả kết quả truy xuất kết hợp sinh câu trả lời.']
  ],
  W38D5: [
    ['Citation · Dẫn nguồn', 'Tham chiếu giúp người đọc mở bằng chứng hỗ trợ cho một phần câu trả lời.']
  ],
  // W39 · RAG evaluation
  W39D1: [
    ['Precision@k', 'Tỷ lệ vị trí trong k kết quả đầu chứa tài liệu được đánh giá là phù hợp.'],
    ['Recall@k', 'Tỷ lệ tài liệu phù hợp được tìm thấy trong k kết quả đầu trên tổng số tài liệu phù hợp đã biết.']
  ],
  W39D2: [
    ['Grounding evaluation · Đánh giá căn cứ', 'Đo mức các khẳng định trong câu trả lời được hỗ trợ bởi bằng chứng đã cho.']
  ],
  W39D3: [
    ['Adversarial RAG test', 'Ca đưa truy vấn hoặc tài liệu đối kháng vào luồng RAG để kiểm quyền truy cập và cách xử lý chỉ dẫn độc hại.']
  ],
  W39D4: [
    ['Stage isolation · Cô lập từng giai đoạn', 'Kiểm riêng nạp dữ liệu, truy xuất hoặc sinh câu trả lời để xác định nơi vấn đề bắt đầu.']
  ],
  W39D5: [
    ['Release threshold · Ngưỡng phát hành', 'Mức tối thiểu hoặc tối đa được chấp nhận cho phép đo trước khi phát hành.']
  ],
  // W40 · Social signals and growth
  W40D1: [
    ['Social signal · Tín hiệu xã hội', 'Dữ liệu từ tương tác như lượt chia sẻ hoặc bình luận, dùng làm dấu hiệu về mức quan tâm.']
  ],
  W40D2: [
    ['Input normalization · Chuẩn hóa đầu vào', 'Chuyển các cách biểu diễn tương đương sang một dạng nhất quán.'],
    ['Deduplication · Loại bản ghi trùng', 'Nhận diện và xử lý các bản ghi đại diện cùng một mục theo quy tắc định danh.']
  ],
  W40D3: [
    ['Architecture trade-off · Đánh đổi kiến trúc', 'Lựa chọn cân bằng giữa các mục tiêu như độ trễ, chi phí và độ phức tạp vận hành.']
  ],
  W40D4: [
    ['Vertical / horizontal scaling', 'Mở rộng dọc tăng tài nguyên của một đơn vị chạy. Mở rộng ngang tăng số đơn vị chạy.']
  ],
  W40D5: [
    ['Skills roadmap · Lộ trình năng lực', 'Thứ tự phát triển kỹ năng với mốc và bằng chứng thực hành cho mỗi chặng.']
  ],
  // W41 · FDE discovery and solution design
  W41D1: [
    ['Discovery · Khảo sát nhu cầu', 'Tìm hiểu vấn đề, người dùng, bối cảnh và kết quả khách hàng cần trước khi chốt giải pháp.']
  ],
  W41D2: [
    ['User journey · Hành trình người dùng', 'Chuỗi bước người dùng đi qua để đạt một mục tiêu.'],
    ['Acceptance criteria · Tiêu chí chấp nhận', 'Điều kiện quan sát hoặc đo được để các bên xác nhận kết quả.']
  ],
  W41D3: [
    ['Scope · Phạm vi', 'Ranh giới phần việc và kết quả được thống nhất cho một đợt triển khai.'],
    ['Timebox · Khung thời gian cố định', 'Khoảng thời gian giới hạn trước cho một hoạt động.']
  ],
  W41D4: [
    ['Solution proposal · Đề xuất giải pháp', 'Tài liệu nêu cách giải quyết vấn đề, thành phần, ràng buộc và phương án kiểm chứng.']
  ],
  W41D5: [
    ['Discovery capstone · Bài tổng hợp khảo sát', 'Bài tổng hợp bằng chứng nhu cầu, phạm vi và đề xuất để các bên ra quyết định.']
  ],
  // W42 · FDE integration engineering
  W42D1: [
    ['API contract · Hợp đồng API', 'Thỏa thuận về cách gọi, quyền truy cập, cấu trúc dữ liệu và phản hồi giữa các bên tích hợp.']
  ],
  W42D2: [
    ['Data pipeline · Luồng xử lý dữ liệu', 'Chuỗi bước thu thập, kiểm tra, biến đổi và chuyển dữ liệu đến nơi sử dụng.']
  ],
  W42D3: [
    ['RBAC · Kiểm quyền theo vai trò', 'Cấp quyền cho vai trò và gán vai trò cho người dùng.'],
    ['Tenant isolation · Cô lập dữ liệu tổ chức', 'Tách phạm vi dữ liệu và quyền giữa các tổ chức dùng chung hệ thống.']
  ],
  W42D4: [
    ['Frontend/backend integration', 'Kết nối thao tác giao diện với API và ánh xạ phản hồi thành trạng thái người dùng thấy.']
  ],
  W42D5: [
    ['Integration acceptance test', 'Ca xác nhận các hệ thống kết nối đáp ứng hành vi và điều kiện đã thỏa thuận.']
  ],
  // W43 · FDE deployment and reliability
  W43D1: [
    ['Staging / production', 'Staging là môi trường thử gần giống bản thật. Production là môi trường phục vụ người dùng thực.']
  ],
  W43D2: [
    ['Release pipeline · Luồng phát hành', 'Chuỗi bước tạo bản chạy, kiểm tra và đưa bản đó đến môi trường đích.']
  ],
  W43D3: [
    ['SLI · Chỉ số mức dịch vụ', 'Phép đo định lượng một khía cạnh dịch vụ, như tỷ lệ yêu cầu thành công.'],
    ['SLO · Mục tiêu mức dịch vụ', 'Mức mục tiêu đặt cho một SLI trong khoảng thời gian xác định.']
  ],
  W43D4: [
    ['Incident response · Ứng phó sự cố', 'Quy trình phát hiện, giới hạn tác động, phục hồi dịch vụ và theo dõi sau sự cố.']
  ],
  W43D5: [
    ['Operational readiness · Sẵn sàng vận hành', 'Mức đội vận hành có đủ kiểm tra, giám sát, phân công và cách phục hồi để tiếp nhận dịch vụ.']
  ],
  // W44 · FDE AI delivery and customer handover
  W44D1: [
    ['LLM integration · Tích hợp mô hình ngôn ngữ', 'Kết nối mô hình vào luồng ứng dụng với hợp đồng dữ liệu, quyền gọi công cụ và xử lý lỗi rõ ràng.']
  ],
  W44D2: [
    ['RAG · Sinh nội dung tăng cường truy xuất', 'Cách tìm dữ liệu liên quan rồi cung cấp làm ngữ cảnh cho mô hình tạo câu trả lời.']
  ],
  W44D3: [
    ['Safety evaluation · Đánh giá an toàn', 'Đo hệ thống có tuân thủ giới hạn dữ liệu, quyền và hành vi trong các tình huống thử đã chọn.']
  ],
  W44D4: [
    ['Runbook · Hướng dẫn vận hành', 'Các bước thực hiện công việc lặp lại hoặc xử lý tình huống cụ thể.'],
    ['Handover · Bàn giao', 'Chuyển giao sản phẩm, quyền, hướng dẫn và trách nhiệm để bên nhận có thể tiếp tục vận hành.']
  ],
  W44D5: [
    ['Delivery capstone · Bài tổng hợp bàn giao', 'Bài tích hợp khảo sát nhu cầu, triển khai, kiểm chứng và bàn giao một giải pháp hoàn chỉnh.']
  ]
};
