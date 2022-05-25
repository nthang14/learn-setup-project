# axios.create : tạo một đối tượng axios bằng hàm axios.create([config])

## config gồm: 

### url: đưỡng dẫn của request

### method: phương thức được dùng khi thực hiện request (mặc định là get)

### baseURL: được thêm vào trước url

### transformRequest: cho phép thay đổi dữ liệu khi gửi lên server (chỉ dùng với put/post/patch)
####      transformRequest: [function (data, headers) {
####          // Thực hiện thay đổi dữ liệu
####          return data;
####        }],

### transformResponse: thay đổi dữ liệu trả về trước khi vào hàm xử lí then/catch
####     transformResponse: [function (data) {
####        // Thực hiện việc thay đổi dữ liệu
####      return data;
####     }],

### headers: là các header được đặt lại trước khi gửi server

### params: các tham số URL sẽ được gửi lên cùng server

### data: dữ liệu được gửi theo body của request

### timeout: chỉ định số mili giây khi request vượt quá thời gian truy cập và bị huỷ bỏ

### withCredentials: chỉ định xem có thực hiện các request cross-site Access-Control sử dụng credential hay không

### auth: chỉ rằng http basic auth nên được sử dụng và cung cấp thông tin đăng nhập. Thao tác này sẽ đặt tiêu đề 'Authorization', ghi đè lê bất kì có thể tuỳ chỉnh. Đối với mã Bearer nên sử dụng tuỳ chỉnh của request

### responseType: kiểu dữ liệu mà server trả về. Mặc định là json

### 