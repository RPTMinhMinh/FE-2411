function FooterComponent(){
    return `
    <footer class="bg-dark text-white text-center py-4"> 
        <div class="container"> 
            <p class="mb-0">© 2025 Công ty của bạn. Tất cả các quyền được bảo lưu.</p> 
            <p class="mb-0"> <a href="#" class="text-white">Điều khoản dịch vụ</a> | <a href="#" class="text-white">Chính sách bảo mật</a> </p> 
        </div> 
    </footer>
    `
}

const footerElement = document.getElementsByTagName('FooterComponent');
for(let item of footerElement){
    item.innerHTML = FooterComponent();
}