const marqueeContent = document.querySelector('.marquee-content');
const totalWidth = marqueeContent.scrollWidth;

const startMarquee = () => {
    let position = 0;
    
    const animate = () => {
        position -= 1; // 控制移動速度
        if (Math.abs(position) >= totalWidth) {
            position = window.innerWidth; // 重置位置至右側
        }
        marqueeContent.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    };

    animate();
};

startMarquee();