import axios from "axios";


export async function authentication(apiURL) {
    try {
        const headers = {};
        
        // Kiểm tra và thêm token vào headers nếu có
        const token = localStorage.getItem('jwtToken');
        console.log(token)
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        // Gửi yêu cầu GET với hoặc không có token
        const response = await axios.get(apiURL, { headers });
        return response; // Trả về phản hồi
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        throw error; // Ném lỗi lên để xử lý ở nơi khác nếu cần
    }
}