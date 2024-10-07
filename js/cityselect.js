const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');

const districts = {
    taipei: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
    newTaipei: ['板橋區', '新莊區', '中和區', '永和區', '土城區', '樹林區', '三峽區', '鶯歌區', '三重區', '蘆洲區', '五股區', '泰山區', '林口區', '八里區', '淡水區', '三芝區', '石門區', '金山區', '萬里區', '汐止區', '瑞芳區', '貢寮區', '平溪區', '雙溪區']
};

citySelect.addEventListener('change', function () {
    districtSelect.innerHTML = '<option value="">請選擇區域</option>';
    const selectedCity = citySelect.value;
    if (districts[selectedCity]) {
        districts[selectedCity].forEach(function (district) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});