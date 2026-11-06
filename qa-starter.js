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
      ) }],
      link: ['./#bai/QA3D3', 'Quay lại bài viết test trong Postman']
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

  const storageKey = 'code-master-qa-starter-v1';
  let drafts = {};
  try {
    drafts = JSON.parse(localStorage.getItem(storageKey) || '{}') || {};
  } catch {}
  const create = (tag, text) => {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    return element;
  };

  for (const step of steps) {
    const card = create('article');
    card.id = step.id;
    const question = create('p', step.task);
    question.className = 'practice-task';
    const output = create('pre', 'Kết quả sẽ hiện ở đây.');
    output.className = 'practice-output';
    output.setAttribute('role', 'status');
    const field = create('textarea');
    field.id = step.id + '-answer';
    field.spellcheck = false;
    field.maxLength = 6000;
    field.value = drafts[step.id] ?? step.starter;
    const label = create('label', 'Code của bạn');
    label.htmlFor = field.id;
    field.addEventListener('input', () => {
      drafts[step.id] = field.value;
      try {
        localStorage.setItem(storageKey, JSON.stringify(drafts));
      } catch {
        output.textContent = 'Không lưu được bản nháp trên trình duyệt này.';
      }
    });
    const run = create('button', 'Chạy và kiểm tra');
    run.type = 'button';
    run.addEventListener('click', () => {
      run.disabled = true;
      output.textContent = 'Đang chạy…';
      runPractice(field.value, step.cases, result => {
        output.textContent = (result.ok ? 'Đạt tất cả kiểm tra' : 'Cần sửa') + '\n' + result.text;
        run.disabled = false;
      });
    });
    const solution = create('details');
    solution.append(create('summary', 'Mở lời giải mẫu'), create('pre', step.solution));
    card.append(create('h2', step.title), create('p', step.lesson), create('pre', step.example),
      question, label, field, run, output, solution);
    if (step.link) {
      const link = create('a', step.link[1]);
      link.href = step.link[0];
      card.append(link);
    }
    document.getElementById('js-steps').append(card);
  }

  const section = document.getElementById(location.hash.slice(1));
  section?.scrollIntoView();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(() => {});
  }
})();
