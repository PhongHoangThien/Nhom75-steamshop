export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: string;
}
const longContent = "Sự bùng nổ mạnh mẽ của các dòng game độc lập (Indie Games) trong những năm gần đây đã thực sự mang đến một làn gió mới, góp phần làm thay đổi sâu sắc cục diện của cộng đồng game thủ trên toàn thế giới. Khác với những dự án AAA xa hoa vốn được hậu thuẫn bởi các tập đoàn lớn, ngân sách khổng lồ và chiến dịch marketing rầm rộ, các nhà phát triển Indie thường chỉ là những nhóm nhỏ, thậm chí đôi khi chỉ gồm một vài cá nhân đam mê. Họ không cần đến đội ngũ hàng nghìn người hay công nghệ đồ họa đắt đỏ để tạo nên dấu ấn, mà tập trung toàn bộ tâm huyết vào trải nghiệm cốt lõi và giá trị mà trò chơi mang lại.\n" +
    "\n" +
    "Điểm khác biệt lớn nhất của game Indie nằm ở sự tự do sáng tạo gần như tuyệt đối. Không bị ràng buộc bởi áp lực doanh số hay những công thức thương mại an toàn, các nhà làm game Indie sẵn sàng thử nghiệm những ý tưởng táo bạo, những lối chơi mới mẻ và các cách kể chuyện phi truyền thống. Chính điều này đã tạo ra hàng loạt tựa game với phong cách độc đáo, từ đồ họa tối giản nhưng đầy cảm xúc, cho đến gameplay tưởng chừng đơn giản nhưng lại ẩn chứa chiều sâu đáng kinh ngạc.\n" +
    "\n" +
    "Không chỉ dừng lại ở yếu tố giải trí, nhiều game Indie còn mang trong mình những thông điệp nhân văn sâu sắc. Thông qua các cơ chế chơi và cốt truyện tinh tế, game thủ được tiếp cận với những lát cắt chân thực về tâm lý con người, những vấn đề xã hội nhức nhối như sự cô đơn, trầm cảm, chiến tranh, môi trường hay mối quan hệ giữa con người với nhau. Thay vì áp đặt thông điệp một cách trực diện, các tựa game này khéo léo dẫn dắt người chơi tự cảm nhận, tự suy ngẫm và rút ra bài học cho riêng mình.\n" +
    "\n" +
    "Chính vì vậy, trải nghiệm mà game Indie mang lại không chỉ đơn thuần là những giờ phút giải trí sau ngày dài mệt mỏi, mà còn là một hành trình kết nối cảm xúc. Người chơi không chỉ “chơi game”, mà còn đồng cảm với nhân vật, thấu hiểu câu chuyện và đôi khi nhìn thấy chính bản thân mình trong đó. Những khoảnh khắc này đã chứng minh rằng giá trị cốt lõi của một tựa game không nằm ở đồ họa hào nhoáng hay công nghệ tối tân, mà nằm ở linh hồn, cảm xúc và tâm huyết mà người tạo ra gửi gắm vào từng chi tiết nhỏ nhất.\n" +
    "\n" +
    "Sự thành công ngày càng rõ nét của dòng game Indie cũng là minh chứng cho việc cộng đồng game thủ đang dần trưởng thành hơn trong cách tiếp cận và đánh giá một sản phẩm. Thay vì chỉ chạy theo những bom tấn đình đám, người chơi ngày nay sẵn sàng mở lòng đón nhận những trải nghiệm mới mẻ, sâu sắc và mang tính cá nhân hơn. Và chính điều đó đã, đang và sẽ tiếp tục tạo điều kiện để game Indie phát triển mạnh mẽ, trở thành một phần không thể thiếu trong bức tranh toàn cảnh của ngành công nghiệp game hiện đại.";
const randomAuthors = ["Orin", "Minh Tuấn", "Hoàng Nam", "Admin"];
const randomTitles = ["Top game sinh tồn", "Review Elden Ring", "Cẩm nang Indie"];

export const MockBlogs: Blog[] = Array.from({ length: 50 }).map((_, i) => {
    const id = i + 1;
    const imageNumber = (i % 9) + 1;
    return {
        id: id,
        title: randomTitles[i % randomTitles.length] + ` số ${id}`,
        excerpt: "Mô tả ngắn cho bài viết...",
        content: longContent,
        image: `blog-image-${imageNumber}.png`,
        category: ["News", "Review", "Guide", "Survival"][i % 4],
        date: "19/01/2026",
        author: randomAuthors[i % randomAuthors.length]
    };
});
