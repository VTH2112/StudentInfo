
const initialState = {
    studentInfo: [
        {
            id: 1,
            name: 'Nguyễn Ngọc Minh',
            dob: '1/1/2000',
            gender: 'Female',
            addr: '52 ngách 25/7 Vũ Ngọc Phan , Đống Đa, Hà Nội',
        },
        {
            id: 2,
            name: 'Trần Minh Quang',
            dob: '2/10/2000',
            gender: 'Male',
            addr: '21 Ngõ 25 Bằng Liệt Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội',
        },
        {
            id: 3,
            name: 'Đỗ Xuân Tuyên',
            dob: '3/1/2000',
            gender: 'Male',
            addr: '94 an đào B, Thị Trấn Trâu Quỳ, Huyện Gia Lâm, Hà Nội',
        },
    ]

}
export default function actionForReducers(state = initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case "addStudentInfo":
            return {
                ...state,
                studentInfo: [
                    ...state.studentInfo,
                    action.payload
                ]
            }
        case "DELETE":
            return {
                ...state,
                studentInfo: state.studentInfo.filter(i => i.id !== action.payload.id)

            };
        default:
            return state
    }
}