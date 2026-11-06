/* Practice runner for small JavaScript exercises, isolated from the course storage. */
(function () {
  'use strict';

  const lines = (...rows) => rows.join('\n');
  const steps = [
    {
      id: 'js-dau-tien',
      title: '2. Biến, kiểu dữ liệu và dòng JavaScript đầu tiên',
      lesson: 'const đặt tên cho một giá trị. Dấu = gán giá trị, còn console.log hiện giá trị để kiểm. Số 120000 dùng để tính, chuỗi "120000" là văn bản và true/false diễn tả đúng/sai. Giữ mã tài khoản có số 0 đầu dưới dạng chuỗi.',
      example: lines('const price = 120000;', 'const quantity = 2;', 'console.log(price * quantity); // 240000'),
      task: 'Khai báo price = 220000 và quantity = 3. Tính total bằng phép nhân và in ra kết quả.',
      starter: lines('const price = 220000;', 'const quantity = 3;', '// TODO khai báo total và in kết quả'),
      solution: lines('const price = 220000;', 'const quantity = 3;', 'const total = price * quantity;', 'console.log(total);'),
      cases: [{ check: 'assertEqual(total, 660000, "Tổng 3 vé");' }]
    },
    {
      id: 'bien',
      title: '3. Điều kiện và giá trị biên',
      lesson: 'Phép >= hoặc <= cho kết quả true/false. Dấu && yêu cầu cả hai vế đúng. if chạy nhánh trong dấu ngoặc nhọn khi điều kiện đúng, còn else chạy nhánh còn lại. Dùng === khi muốn kiểm cả kiểu lẫn giá trị.',
      example: lines('const guests = 3;', 'let allowed = false;', 'if (guests >= 1 && guests <= 4) {', '  allowed = true;', '}', 'console.log(allowed); // true'),
      task: 'Lab chấp nhận số tiền từ 10.000 đến 200.000 VND, gồm cả hai đầu. App đưa số thử qua biến input. Gán valid bằng true nếu hợp lệ và false nếu ngoài khoảng. Nút chạy sẽ đổi input qua 4 giá trị biên.',
      starter: lines('let valid = false;', '// TODO dùng input và cập nhật valid khi hợp lệ'),
      solution: lines('let valid = false;', 'if (input >= 10000 && input <= 200000) {', '  valid = true;', '}', 'console.log(input, valid);'),
      cases: [9999, 10000, 200000, 200001].map(input => ({
        input,
        check: 'assertEqual(valid, ' + (input >= 10000 && input <= 200000) + ', "Biên ' + input + '");'
      }))
    },
    {
      id: 'ham',
      title: '4. Hàm, đối tượng và danh sách',
      lesson: 'function gom một việc có thể gọi lại. Tham số nhận dữ liệu khi gọi hàm. return trả kết quả cho người gọi. Đối tượng dùng dấu ngoặc nhọn và có các trường như status. Danh sách dùng dấu ngoặc vuông. for...of lấy từng phần tử để xử lý.',
      example: lines('function sumAmounts(rows) {', '  let sum = 0;', '  for (const row of rows) {', '    sum = sum + row.amount;', '  }', '  return sum;', '}', 'console.log(sumAmounts([{ amount: 100 }, { amount: 20 }])); // 120'),
      task: 'Viết countSuccess(rows) trả số giao dịch có status bằng SUCCESS. Đừng đếm FAILED hoặc PENDING. Danh sách rỗng phải trả 0.',
      starter: lines('function countSuccess(rows) {', '  let count = 0;', '  // TODO duyệt từng row và tăng count khi thành công', '  return count;', '}'),
      solution: lines('function countSuccess(rows) {', '  let count = 0;', '  for (const row of rows) {', '    if (row.status === "SUCCESS") count = count + 1;', '  }', '  return count;', '}'),
      cases: [{ check: lines(
        'assertEqual(countSuccess([]), 0, "Danh sách rỗng");',
        'assertEqual(countSuccess([{status:"SUCCESS"},{status:"FAILED"},{status:"SUCCESS"},{status:"PENDING"}]), 2, "Hai giao dịch thành công");'
      ) }]
    },
    {
      id: 'assertion',
      title: '5. Đọc JSON và viết assertion',
      lesson: 'JSON từ API thường đến dưới dạng văn bản. JSON.parse đổi văn bản đó thành đối tượng để bạn đọc trường bằng dấu chấm. typeof kiểm kiểu, trim() bỏ khoảng trắng hai đầu chuỗi. Assertion so actual với expected. Trong Postman, đặt test ở Scripts → Post-response. pm.response.json() đọc body, còn pm.response.to.have.status(...) kiểm mã HTTP. () => { ... } là một cách viết hàm Postman sẽ gọi để kiểm.',
      example: lines('const row = JSON.parse(\'{"status":"PENDING","transactionId":"LAB-7"}\');',
        'console.log(row.status); // PENDING',
        '// Trong Postman', 'pm.test("HTTP 200", () => {', '  pm.response.to.have.status(200);', '});'),
      task: 'Viết isTransferSuccess(text). Trả true khi JSON có status SUCCESS và transactionId là chuỗi có nội dung. Trả false cho PENDING hoặc thiếu mã. App đưa các JSON đúng cú pháp để bạn tập kiểm dữ liệu.',
      starter: lines('function isTransferSuccess(text) {', '  const body = JSON.parse(text);', '  // TODO kiểm status và transactionId, rồi return true hoặc false', '}'),
      solution: lines('function isTransferSuccess(text) {', '  const body = JSON.parse(text);', '  return body.status === "SUCCESS" &&', '    typeof body.transactionId === "string" && body.transactionId.trim() !== "";', '}'),
      cases: [{ check: lines(
        'assertEqual(isTransferSuccess(\'{"status":"SUCCESS","transactionId":"LAB-7"}\'), true, "SUCCESS có mã");',
        'assertEqual(isTransferSuccess(\'{"status":"PENDING","transactionId":"LAB-7"}\'), false, "PENDING");',
        'assertEqual(isTransferSuccess(\'{"status":"SUCCESS"}\'), false, "Thiếu mã");',
        'assertEqual(isTransferSuccess(\'{"status":"SUCCESS","transactionId":" "}\'), false, "Mã rỗng");'
      ) }]
    },
    {
      id: 'async',
      title: '6. Promise và await trước khi dùng Playwright',
      lesson: 'Một thao tác có thể chưa có kết quả ngay. Promise biểu diễn kết quả sẽ có hoặc lỗi sẽ xảy ra. await chờ kết quả bên trong hàm async. try chứa phần có thể lỗi, còn catch chạy khi lỗi xảy ra. Khi viết Playwright, chờ đúng thao tác và kiểm điều kiện quan sát được.',
      example: lines('async function readStatus(read) {', '  const result = await read();', '  return result.status;', '}', 'console.log(await readStatus(() => Promise.resolve({ status: "PENDING" })));'),
      task: 'Viết async function lookup(read). Gọi và chờ read(), rồi trả result.status. Nếu read() lỗi, trả chuỗi "UNAVAILABLE". App kiểm cả phản hồi thành công lẫn thất bại.',
      starter: lines('async function lookup(read) {', '  // TODO await read() trong try và xử lý lỗi ở catch', '}'),
      solution: lines('async function lookup(read) {', '  try {', '    const result = await read();', '    return result.status;', '  } catch {', '    return "UNAVAILABLE";', '  }', '}'),
      cases: [{ check: lines(
        'assertEqual(await lookup(() => Promise.resolve({status:"SUCCESS"})), "SUCCESS", "Đọc thành công");',
        'assertEqual(await lookup(() => Promise.reject(new Error("Timeout"))), "UNAVAILABLE", "Timeout");'
      ) }]
    }
  ];

  const guides = {
    'terminal': {
      title: 'Mở terminal và chạy lệnh đầu tiên',
      check: 'Terminal đã in ra phiên bản Node và kết quả 5.',
      content: `      <p>Terminal là cửa sổ để gõ lệnh. Thư mục hiện tại là nơi lệnh đọc hoặc tạo tệp. Trên Windows, mở Windows Terminal rồi chọn PowerShell. Nếu dùng Command Prompt, thay <code>Get-Location</code> bằng <code>cd</code>.</p>
      <ol>
        <li>Cài Node.js bản LTS từ trang chính thức. Mở lại terminal và gõ <code>node -v</code>. Nếu thấy số phiên bản, máy đã tìm được Node.</li>
        <li>Gõ <code>npm.cmd -v</code> trong PowerShell để kiểm tra npm. npm cài thư viện cho dự án.</li>
        <li>Gõ lần lượt từng dòng dưới đây. Nếu đã có thư mục cùng tên, dùng tên khác.</li>
      </ol>
      <pre><code>mkdir qa-tu-0
cd qa-tu-0
Get-Location
node -e "console.log(2 + 3)"</code></pre>
      <p><strong>Qua bước này khi</strong> bạn chỉ được thư mục hiện tại và terminal in ra <code>5</code>. Bài JavaScript bên dưới chạy trong trình duyệt. Bạn có thể làm trước khi cài Node.js. Cần Node.js khi chạy Newman và Playwright trên máy.</p>
      <p><a href="https://nodejs.org/en/download">Tải Node.js</a></p>`
    },
    'postman': {
      title: 'Chạy ba assertion trong Postman',
      check: 'Đã thử ba phép kiểm và xác nhận thấy lỗi khi đổi expected.',
      content: `      <p>Đây là phản hồi JSON tĩnh để luyện assertion. Hợp đồng của bài là GET trả HTTP 200, status SUCCESS và transactionId là chuỗi có nội dung.</p>
      <ol>
        <li>Tải <a href="./qa-starter.postman_collection.json" download>collection mẫu v2.1</a>, rồi dùng Import trong Postman. Mở request “Read sample transfer” và bấm Send.</li>
        <li>Mở Scripts → Post-response để xem ba phép kiểm. Trong Test Results, tìm kết quả từng phép kiểm. Đổi expected từ SUCCESS thành PENDING, gửi lại để thấy đúng assertion bị lỗi, rồi khôi phục SUCCESS.</li>
      </ol>
      <p><strong>Tự kiểm</strong> · Bạn giải thích được vì sao HTTP 200 và status SUCCESS cần hai phép kiểm riêng.</p>
      <p><a href="./qa-transfer.json" download>Tải phản hồi JSON mẫu</a></p>`
    },
    'newman': {
      title: 'Chạy collection đầu tiên bằng Newman',
      check: 'Đã chạy collection và xác định được phép kiểm lỗi từ CLI.',
      content: `      <p>Dùng collection đã thử trong bài viết script Postman. Mở PowerShell trong thư mục <code>qa-tu-0</code> bạn đã tạo ở bài Chuẩn hóa Test Case.</p>
      <p><a class="secondary" href="./qa-starter.postman_collection.json" download>Tải collection mẫu v2.1</a></p>
      <p>Lưu collection mẫu đã tải vào thư mục <code>qa-tu-0</code> rồi gõ các lệnh dưới đây. Dòng <code>init</code> chỉ cần chạy nếu thư mục chưa có <code>package.json</code>.</p>
      <pre><code>npm.cmd init -y
npm.cmd install -D newman
npx.cmd newman run qa-starter.postman_collection.json -r cli</code></pre>
      <p><strong>Qua phần này khi</strong> đọc được ba kết quả đạt trên CLI, chỉ ra assertion nào fail khi expected sai và biết quay lại request để kiểm dữ liệu thật nhận được.</p>
      <p><a href="./qa-transfer.json">Xem JSON mẫu</a> · <a href="https://learning.postman.com/docs/collections/using-newman-cli/installing-running-newman">Hướng dẫn Newman</a></p>`
    },
    'playwright': {
      title: 'Chuyển một test case tay thành Playwright',
      check: 'Đã chạy ca mẫu, tự thêm ca biên và đọc kết quả.',
      content: `      <p>Thử đăng nhập và chuyển tiền trong lab bên dưới trước khi chạy Playwright. Dùng tài khoản mẫu <code>qa-demo</code> với mật khẩu <code>test-only-01</code>. Đăng nhập đúng phải thấy tiêu đề “Số dư tài khoản”. Đăng nhập sai phải có lỗi. Thử <code>9999</code> rồi <code>10000</code> VND để xem hai phía của hạn mức tối thiểu.</p>
      <iframe class="qa-practice-frame" src="./qa-practice.html?embedded=1" title="Mini Banking Lab" loading="lazy"></iframe>
      <div class="study-actions">
        <a class="secondary" href="./qa-practice.html" download>Tải qa-practice.html</a>
        <a class="secondary" href="./qa-playwright.spec.js" download>Tải qa-playwright.spec.js</a>
      </div>
      <p>Lưu hai tệp vào <code>qa-tu-0</code>. Nếu Windows ẩn đuôi tệp, kiểm tra tên cuối cùng là <code>.html</code> và <code>.js</code>. Trong PowerShell đang ở đúng thư mục, chạy lần lượt. Bỏ qua dòng <code>init</code> nếu đã chạy ở phần Newman.</p>
      <pre><code>npm.cmd init -y
npm.cmd install -D @playwright/test
npx.cmd playwright install chromium
npx.cmd playwright test qa-playwright.spec.js --reporter=list</code></pre>
      <p>Trong tệp test, <code>test(...)</code> đặt tên cho ca thử. <code>page.getByLabel(...)</code> chọn trường theo nhãn. <code>await ...fill(...)</code> nhập và chờ thao tác. <code>await expect(...).toBeVisible()</code> là phép so expected với UI. <code>beforeEach</code> mở lại lab để mỗi ca bắt đầu từ trạng thái sạch.</p>
      <details>
        <summary>Đọc một ca test từng dòng</summary>
        <pre><code>test('đăng nhập đúng', async ({ page }) => {
  await page.getByLabel('Tên đăng nhập').fill('qa-demo');
  await page.getByLabel('Mật khẩu').fill('test-only-01');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await expect(page.getByRole('heading', { name: 'Số dư tài khoản' })).toBeVisible();
});</code></pre>
        <p><code>async ({ page }) =&gt; { ... }</code> là hàm của ca test. Playwright cung cấp <code>page</code> cho hàm. Bốn dòng bên trong tương ứng với ba thao tác và một bước kiểm tra. Trong tệp đầy đủ, <code>require('@playwright/test')</code> lấy các hàm từ thư viện vừa cài.</p>
      </details>
      <p><strong>Qua bước này khi</strong> chạy được ba ca mẫu, đổi một expected để test đỏ, đọc dòng lỗi, rồi khôi phục để xanh. Sau đó tự thêm case <code>200001</code> VND bị chặn và giải thích expected trước khi chạy.</p>
      <p><a href="https://playwright.dev/docs/intro">Tài liệu Playwright về cài đặt và chạy test</a></p>`
    },
    'page-object': {
      title: 'Gom các thao tác lặp vào Page Object',
      check: 'Đã chuyển ca đăng nhập sang Page Object và chạy lại.',
      content: `      <p>Khi hai test dùng cùng form, đưa ba bước điền tên, điền mật khẩu và bấm nút vào một method. <code>class</code> mô tả đối tượng, <code>new LoginPage(page)</code> tạo một đối tượng cho ca test và <code>this.page</code> giữ trang do Playwright cấp.</p>
      <details>
        <summary>Thử trên tệp Playwright đã tải</summary>
        <p>Dán class này vào <code>qa-playwright.spec.js</code> trước <code>test.beforeEach</code>.</p>
        <pre><code>class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async signIn(username, password) {
    await this.page.getByLabel('Tên đăng nhập').fill(username);
    await this.page.getByLabel('Mật khẩu').fill(password);
    await this.page.getByRole('button', { name: 'Đăng nhập' }).click();
  }
}</code></pre>
        <p>Tệp mẫu ở bài Playwright gọi hàm <code>login(page)</code> để gộp ba thao tác. Trong ca đăng nhập đúng, thay dòng gọi hàm bằng hai dòng dưới và giữ nguyên assertion.</p>
        <pre><code>const loginPage = new LoginPage(page);
await loginPage.signIn('qa-demo', 'test-only-01');</code></pre>
        <p>Làm tương tự trong ca sai mật khẩu, giữ <code>wrong-test-password</code>. Đổi cả lệnh đăng nhập của ca chuyển tiền. Khi ba ca đều dùng Page Object, có thể xóa hàm <code>login</code> cũ.</p>
      </details>
      <p><strong>Qua phần này khi</strong> các ca test vẫn xanh và bạn chỉ được chỗ sửa khi nhãn “Đăng nhập” thay đổi.</p>`
    },
    'ci': {
      title: 'Git, CI và đọc lỗi',
      check: 'Đã thử workflow và đọc được step lỗi trong log.',
      content: `      <p>Cài Git và kiểm <code>git --version</code>. Git lưu lịch sử dự án. GitHub lưu repository từ xa. Khi đã chạy test trên máy, tạo <code>.gitignore</code> chứa <code>node_modules/</code>, <code>test-results/</code> và <code>playwright-report/</code> trên ba dòng. Giữ <code>package.json</code> và <code>package-lock.json</code> để CI cài lại đúng thư viện.</p>
      <pre><code>git init
git status
git add .
git diff --cached --stat
git commit -m "Add first QA automation tests"</code></pre>
      <p>Nếu Git hỏi tên hoặc email, đặt <code>git config --local user.name</code> và <code>git config --local user.email</code> với giá trị của bạn, rồi chạy lại lệnh commit. Tạo một repository trống của bạn trên GitHub. Thay URL mẫu ở dòng thứ hai bằng URL clone của repo đó, rồi chạy.</p>
      <pre><code>git branch -M main
git remote add origin https://github.com/your-name/qa-tu-0.git
git push -u origin main</code></pre>
      <p>Tạo tệp <code>.github/workflows/qa.yml</code> theo mẫu dưới đây, commit và push lần nữa. Mở tab Actions trên GitHub để xem lần chạy.</p>
      <details>
        <summary>Xem mẫu GitHub Actions</summary>
        <pre><code>name: QA smoke
on: [push]
permissions:
  contents: read
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: '24'
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test qa-playwright.spec.js --reporter=list</code></pre>
      </details>
      <p><strong>Qua bước này khi</strong> bạn chỉ được bước lỗi trong log, phân biệt lỗi thiếu thư viện với assertion fail và tự chạy lại trên máy. Repo thực hành chỉ dùng dữ liệu giả.</p>
      <p><a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">Thiết lập Git</a> · <a href="https://playwright.dev/docs/ci-intro">Tài liệu Playwright CI</a></p>`
    }
  };

  const placements = {
    QA1D2: ['terminal', 'js-dau-tien'],
    QA1D4: ['bien'],
    QA3D1: ['ham'],
    QA3D3: ['assertion', 'postman'],
    QA5D3: ['newman'],
    QA5D4: ['async', 'playwright'],
    QA5D5: ['page-object'],
    QA6D1: ['ci']
  };

  function workerMain() {
    self.addEventListener('message', async ({ data }) => {
      const output = [];
      let checks = 0;
      const log = (...args) => {
        if (output.length < 30) output.push(args.map(value => String(value).slice(0, 160)).join(' '));
      };
      const assertEqual = (actual, expected, label) => {
        if (!Object.is(actual, expected)) {
          throw new Error(label + '. Mong đợi ' + expected + ', nhận ' + String(actual).slice(0, 120) + '.');
        }
        checks++;
        log('Đạt ·', label);
      };
      try {
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        for (const { input, check } of data.cases) {
          const previousChecks = checks;
          const execute = new AsyncFunction('input', 'console', 'assertEqual', data.source + '\n' + check);
          await execute(input, { log, warn: log, error: log }, assertEqual);
          if (checks === previousChecks) {
            throw new Error('Phép kiểm chưa chạy. Kiểm tra lệnh return bên ngoài hàm của bài.');
          }
        }
        self.postMessage({ ok: true, text: output.join('\n') });
      } catch (error) {
        self.postMessage({ ok: false, text: [...output, error.name + ' · ' + error.message].join('\n').slice(0, 4500) });
      }
    }, { once: true });
  }

  function frameMain(workerCode) {
    window.addEventListener('message', event => {
      if (event.source !== window.parent || event.data?.kind !== 'start-qa-practice') return;
      const { source, cases } = event.data;
      const workerUrl = URL.createObjectURL(new Blob([workerCode], { type: 'text/javascript' }));
      const worker = new Worker(workerUrl);
      worker.addEventListener('message', ({ data }) => {
        window.parent.postMessage({ kind: 'qa-practice-result', ...data }, '*');
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
      }, { once: true });
      worker.addEventListener('error', () => {
        window.parent.postMessage({ kind: 'qa-practice-result', ok: false, text: 'Không thể khởi động bộ chạy JavaScript.' }, '*');
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
      }, { once: true });
      worker.postMessage({ source, cases });
    }, { once: true });
  }

  function runPractice(source, cases, callback) {
    const frame = document.createElement('iframe');
    frame.hidden = true;
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.title = 'Bộ chạy JavaScript bài tập';
    const csp = "default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; worker-src blob:; connect-src 'none'";
    frame.srcdoc = '<meta http-equiv="Content-Security-Policy" content="' + csp + '"><script>(' +
      frameMain.toString() + ')(' + JSON.stringify('(' + workerMain.toString() + ')()') + ')<' + '/script>';
    const finish = result => {
      clearTimeout(timer);
      window.removeEventListener('message', receive);
      frame.remove();
      callback(result);
    };
    const receive = event => {
      if (event.source !== frame.contentWindow || event.data?.kind !== 'qa-practice-result') return;
      finish(event.data);
    };
    const timer = setTimeout(() => finish({
      ok: false, text: 'Quá thời gian chạy. Kiểm tra vòng lặp hoặc Promise chưa kết thúc.'
    }), 2500);
    window.addEventListener('message', receive);
    frame.addEventListener('load', () => {
      frame.contentWindow.postMessage({ kind: 'start-qa-practice', source, cases }, '*');
    }, { once: true });
    document.body.append(frame);
  }

  const create = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  };

  if (document.querySelector('[data-qa-starter-redirect]')) {
    const unitId = location.hash.slice(1);
    const lesson = Object.keys(placements).find(id => placements[id].includes(unitId)) || 'QA1D2';
    location.replace('./#bai/' + lesson + '/thuc-hanh');
    return;
  }

  const exercises = new Map(steps.map(step => [step.id, step]));
  try {
    const previous = JSON.parse(localStorage.getItem('code-master-qa-starter-v1') || '{}') || {};
    const drafts = steps.filter(step => typeof previous[step.id] === 'string' && !state.qaStarter?.[step.id]);
    if (drafts.length) {
      const entries = state.qaStarter ||= {};
      for (const { id } of drafts) entries[id] = { code: previous[id] };
      save();
    }
  } catch {}

  function readEntry(id) {
    return state.qaStarter?.[id] || {};
  }

  function writeEntry(id, entry) {
    (state.qaStarter ||= {})[id] = entry;
    try {
      save();
      return true;
    } catch {
      return false;
    }
  }

  function unit(id, title) {
    const card = create('section', '', 'qa-practice-unit study-prose');
    card.id = id;
    card.append(create('h4', title));
    return card;
  }

  function renderExercise(step) {
    const id = step.id;
    const saved = readEntry(id);
    const card = unit(id, step.title.replace(/^\d+\.\s+/, ''));
    const question = create('p', step.task, 'qa-practice-task');
    const output = create('pre', saved.passed ? 'Đạt lần chạy trước với bản code đang lưu.' : 'Kết quả sẽ hiện ở đây.', 'qa-practice-result');
    output.setAttribute('role', 'status');
    const field = create('textarea');
    field.id = id + '-answer';
    field.spellcheck = false;
    field.maxLength = 6000;
    field.value = saved.code ?? step.starter;
    const label = create('label', 'Code của bạn', 'qa-practice-label');
    label.htmlFor = field.id;
    field.addEventListener('input', () => {
      const stored = writeEntry(id, { code: field.value });
      output.textContent = stored ? 'Đã lưu bản nháp. Chạy để kiểm code này.' : 'Không lưu được bản nháp trên trình duyệt này.';
    });
    const run = create('button', 'Chạy và kiểm tra', 'study-primary');
    run.type = 'button';
    run.addEventListener('click', () => {
      const code = field.value;
      run.disabled = true;
      output.textContent = 'Đang chạy…';
      runPractice(code, step.cases, result => {
        run.disabled = false;
        if (!card.isConnected) return;
        if (code !== field.value) {
          output.textContent = 'Code đã đổi. Chạy lại để kiểm bản đang sửa.';
          return;
        }
        const stored = writeEntry(id, { code, passed: result.ok });
        output.textContent = (result.ok ? 'Đạt tất cả kiểm tra' : 'Cần sửa') + '\n' + result.text +
          (stored ? '' : '\nKhông lưu được kết quả trên trình duyệt này.');
      });
    });
    const solution = create('details', '', 'study-disclosure');
    solution.append(create('summary', 'Mở lời giải mẫu'), create('pre', step.solution));
    card.append(create('p', step.lesson), create('pre', step.example), question, label, field, run, output, solution);
    return card;
  }

  function renderGuide(id) {
    const { title, content, check } = guides[id];
    const card = unit(id, title);
    const body = create('div');
    body.innerHTML = content;
    const label = create('label', '', 'qa-practice-check');
    const field = create('input');
    field.type = 'checkbox';
    field.checked = Boolean(readEntry(id).checked);
    const status = create('small');
    status.setAttribute('role', 'status');
    field.addEventListener('change', () => {
      status.textContent = writeEntry(id, { checked: field.checked }) ? 'Đã lưu tự đánh giá.' : 'Không lưu được trên thiết bị này.';
    });
    label.append(field, document.createTextNode(check));
    if (id === 'terminal') {
      const details = create('details', '', 'study-disclosure');
      details.append(create('summary', 'Hướng dẫn cài và thử trên máy'), body, label, status);
      card.append(details);
    } else {
      card.append(body, label, status);
    }
    return card;
  }

  function practicePanel(lessonId) {
    const panel = create('section', '', 'study-part qa-practice');
    panel.append(create('h3', 'Thực hành từng bước', 'study-part-heading'));
    for (const id of placements[lessonId]) {
      const exercise = exercises.get(id);
      panel.append(exercise ? renderExercise(exercise) : renderGuide(id));
    }
    return panel;
  }

  function progress(lessonId) {
    const units = placements[lessonId];
    const complete = units.filter(id => {
      const entry = readEntry(id);
      return exercises.has(id) ? entry.passed : entry.checked;
    });
    return complete.length + '/' + units.length + ' phần thực hành đã kiểm tra. Các phần chạy trên máy dùng kết quả bạn tự xác nhận.';
  }

  window.QAStarter = { hasPractice: lessonId => Object.hasOwn(placements, lessonId), practicePanel, progress };
})();
