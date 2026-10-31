import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/lib/content";
import { guides } from "@/lib/guides";
import { Container, Kicker, TextLink, ZaloButton } from "@/components/ui";

function GuideHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <Container className="pt-[72px] md:pt-[120px]">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-4 max-w-[20ch] text-[32px] font-semibold leading-[1.15] text-ink md:text-[52px]">
        {title}
      </h1>
      <p className="mt-6 max-w-[60ch] text-mute">{lead}</p>
    </Container>
  );
}

function GuideFigure({
  src,
  width,
  height,
  alt,
  caption,
  sizes,
  maxWidthClass,
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  sizes: string;
  maxWidthClass?: string;
  priority?: boolean;
}) {
  return (
    <figure className={maxWidthClass ? `w-full ${maxWidthClass}` : "w-full"}>
      <div className="aspect-square overflow-hidden bg-well p-[10%]">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          quality={80}
          sizes={sizes}
          className="h-full w-full object-contain"
        />
      </div>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-mute">
        {caption}
      </figcaption>
    </figure>
  );
}

export function WorkshopGuideView() {
  const guide = guides["nguyen-lieu-handmade-cho-workshop"];
  const otherGuide = guides["vong-tay-charm-y"];

  return (
    <article>
      <GuideHeader
        kicker={guide.kicker}
        title={guide.title}
        lead={guide.lead}
      />

      <Container className="flex flex-col gap-[96px] py-[72px] md:gap-[120px] md:py-[120px]">
        {/* Section 01 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">01</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Chọn nguyên liệu theo thành phẩm buổi học
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Các xưởng và lớp học thủ công thường chọn nguyên liệu xoay quanh
            thành phẩm chính của buổi học, nhờ vậy tồn kho gọn và dễ kiểm soát. Hiện tại, Yang Supply cung
            cấp sỉ trực tiếp 5 dòng sản phẩm từ Trung Quốc về Việt Nam; kích thước và màu sắc của từng dòng xem tại <Link href="/san-pham" className="link-under">trang Sản phẩm</Link>:
          </p>

          <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-y-4 border-t border-line pt-6 text-[14px] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="contents">
              <dt className="font-medium text-ink">
                <Link href="/san-pham#petals" className="link-under">
                  Cánh hoa acrylic
                </Link>
              </dt>
              <dd className="text-mute">
                Hình cánh hoa lily trong, dùng làm hoa thủ công, cành hoa trang trí và học liệu.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">
                <Link href="/san-pham#stickers" className="link-under">
                  Sticker đính đá
                </Link>
              </dt>
              <dd className="text-mute">
                Bán theo tờ, dùng trang trí hộp quà, thiệp, sổ tay trong buổi workshop ngắn.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">
                <Link href="/san-pham#vase" className="link-under">
                  Khung bình hoa acrylic
                </Link>
              </dt>
              <dd className="text-mute">
                Giữ được nước, hợp để cắm hoa và bày thành phẩm trên bàn học hoặc quầy cửa hàng.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">
                <Link href="/san-pham#starfish" className="link-under">
                  Sao biển resin
                </Link>
              </dt>
              <dd className="text-mute">
                Dùng làm đồ trưng bày và phối tiểu cảnh biển.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">
                <Link href="/san-pham#charm" className="link-under">
                  Vòng tay charm Ý
                </Link>
              </dt>
              <dd className="text-mute">
                Vòng ghép theo mẫu (tráng men, đính đá zircon, chủ đề Giáng Sinh), phù hợp cho bàn trải nghiệm tự chọn mắt charm ghép vòng tại chỗ.
              </dd>
            </div>
          </dl>

          <div className="mt-10 grid max-w-[820px] gap-8 sm:grid-cols-2">
            <GuideFigure
              src="/products/canh-hoa-acrylic-nhieu-mau.jpg"
              width={1600}
              height={1600}
              alt="Mẫu cánh hoa acrylic nhiều màu"
              caption="Mẫu cánh hoa acrylic hình lily nhiều màu."
              sizes="(min-width: 768px) 380px, 90vw"
              priority
            />
            <GuideFigure
              src="/products/kich-thuoc-canh-hoa-acrylic.jpg"
              width={1000}
              height={1000}
              alt="Mẫu kích thước cánh hoa acrylic 45x40mm"
              caption="Quy cách cánh hoa acrylic hình lily 45×40mm dùng để ước tính số cánh cần cho mỗi suất học viên."
              sizes="(min-width: 768px) 380px, 90vw"
            />
          </div>
        </section>

        {/* Section 02 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">02</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Công thức ước tính số lượng kèm tỷ lệ dự phòng
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Trong lớp học thủ công, học viên mới thao tác thường cần thêm nguyên
            liệu dự phòng cho các trường hợp rơi rớt, dán lệch hoặc làm mẫu thử
            cho giảng viên. Bạn có thể áp dụng công thức cơ bản:
          </p>
          <p className="mt-4 max-w-[60ch] font-medium text-ink">
            Tổng số lượng cần đặt = Số người tham gia × Định lượng mỗi suất ×
            (1 + Tỷ lệ dự phòng)
          </p>
          <p className="mt-3 max-w-[60ch] text-[14px] text-mute">
            Lưu ý: Các con số dưới đây là ví dụ minh họa cách tính; khi đặt hàng, hãy thay bằng số người và định lượng thực tế của buổi học.
          </p>

          <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-y-4 border-t border-line pt-6 text-[14px] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="contents">
              <dt className="font-medium text-ink">Ví dụ 1 · Cánh hoa</dt>
              <dd className="text-mute">
                20 người × 12 cánh/suất = 240 cánh; cộng dự phòng 15% (36 cánh
                mẫu thử & hao hụt) → tổng dự kiến 276 cánh.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Ví dụ 2 · Sticker đá</dt>
              <dd className="text-mute">
                30 người × 1 tờ/suất = 30 tờ; cộng dự phòng 10% (3 tờ) → tổng
                dự kiến 33 tờ.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Ví dụ 3 · Khung bình hoa</dt>
              <dd className="text-mute">
                15 người × 1 khung/suất = 15 khung; cộng 2 khung mẫu giảng viên
                → tổng dự kiến 17 khung.
              </dd>
            </div>
          </dl>

          <div className="mt-10 grid max-w-[820px] gap-8 sm:grid-cols-2">
            <GuideFigure
              src="/products/sticker-dinh-da-co-nho-ngoi-sao-nhieu-mau.jpg"
              width={1600}
              height={1600}
              alt="Sticker đính đá cỡ nhỏ hình ngôi sao nhiều màu"
              caption="Mẫu sticker đính đá cỡ nhỏ hình ngôi sao nhiều màu."
              sizes="(min-width: 768px) 380px, 90vw"
            />
            <GuideFigure
              src="/products/khung-binh-hoa-acrylic-trong-suot.jpg"
              width={1307}
              height={1307}
              alt="Khung bình hoa acrylic trong suốt cắm hoa cúc hồng minh họa"
              caption="Khung bình hoa acrylic trong suốt; hoa cúc hồng trong hình được cắm để minh họa."
              sizes="(min-width: 768px) 380px, 90vw"
            />
          </div>
        </section>

        {/* Section 03 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">03</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Chốt bảng màu
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Bạn có thể trộn màu và trộn mẫu trong cùng một đơn hàng để học viên
            có nhiều lựa chọn. Khi lên danh sách đặt sỉ, cần lưu ý thêm 2 điều:
          </p>

          <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-y-4 border-t border-line pt-6 text-[14px] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="contents">
              <dt className="font-medium text-ink">Chốt họa tiết thực tế</dt>
              <dd className="text-mute">
                Với sticker đính đá và vòng tay charm Ý, họa tiết cụ thể được
                chốt trực tiếp theo mẫu khi trao đổi báo giá.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Mẫu thử trước buổi học</dt>
              <dd className="text-mute">
                Muốn xem hàng trước buổi học, bạn có thể lấy mẫu thử; cách tính phí mẫu nằm ở <Link href="/hop-tac" className="link-under">trang Hợp tác</Link>.
              </dd>
            </div>
          </dl>
        </section>

        {/* Section 04 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">04</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            5 thông tin cần gửi khi hỏi giá
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Giá được báo theo từng đơn. Khi nhắn Zalo {contacts.zalo}, bạn chỉ cần gửi 5 thông tin:
          </p>

          <ol className="mt-8 flex max-w-[65ch] flex-col gap-3 border-t border-line pt-6 text-[15px]">
            <li>1. Dòng sản phẩm cần đặt (trong 5 dòng hàng trên).</li>
            <li>2. Quy cách kích thước và danh sách màu sắc / họa tiết.</li>
            <li>3. Số lượng dự kiến cho từng mẫu và từng màu.</li>
            <li>4. Ngày dự kiến tổ chức buổi học hoặc sự kiện.</li>
            <li>
              5. Địa chỉ nhận hàng tại Việt Nam (hoặc kho đơn vị vận chuyển
              riêng của bạn).
            </li>
          </ol>

          <p className="mt-8 max-w-[60ch]">
            Điều khoản báo giá, thanh toán, vận chuyển và bù hàng hư hỏng được ghi đầy đủ tại <Link href="/hop-tac" className="link-under">trang Hợp tác</Link>.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-[14px]">
            <TextLink href="/san-pham">Xem danh mục sản phẩm</TextLink>
            <TextLink href="/hop-tac">Xem quy trình hợp tác</TextLink>
            <TextLink href={otherGuide.href}>
              {otherGuide.shortTitle.vi}
            </TextLink>
          </div>
        </section>

        <div className="flex flex-col items-start gap-8">
          <h2 className="heading-2 max-w-[20ch]">
            Gửi quy cách và số lượng qua Zalo
          </h2>
          <ZaloButton />
        </div>
      </Container>
    </article>
  );
}

export function CharmGuideView() {
  const guide = guides["vong-tay-charm-y"];
  const otherGuide = guides["nguyen-lieu-handmade-cho-workshop"];

  return (
    <article>
      <GuideHeader
        kicker={guide.kicker}
        title={guide.title}
        lead={guide.lead}
      />

      <Container className="pt-10 md:pt-14">
        <GuideFigure
          src={guide.heroImage.src}
          width={guide.heroImage.width}
          height={guide.heroImage.height}
          alt={guide.heroImage.alt}
          caption={guide.heroImage.caption}
          sizes="(min-width: 768px) 520px, 90vw"
          maxWidthClass="max-w-[520px]"
          priority
        />
      </Container>

      <Container className="flex flex-col gap-[96px] py-[72px] md:gap-[120px] md:py-[120px]">
        {/* Section 01 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">01</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Cấu tạo ngoại quan vòng tay charm Ý dạng mắt xích
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Một chiếc{" "}
            <Link href="/san-pham#charm" className="link-under">
              vòng tay charm Ý
            </Link>{" "}
            được ghép từ các mắt xích chữ nhật nối tiếp nhau. Khi lên danh mục
            nhập sỉ cho cửa hàng phụ kiện hoặc bàn workshop, bạn thường kết hợp
            3 nhóm chi tiết ngoại quan dưới đây:
          </p>

          <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-y-4 border-t border-line pt-6 text-[14px] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="contents">
              <dt className="font-medium text-ink">Vòng nền mắt trơn</dt>
              <dd className="text-mute">
                Các mắt kim loại mặt trơn làm khung nền và điều chỉnh độ dài
                vòng theo cổ tay.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Mắt charm họa tiết</dt>
              <dd className="text-mute">
                Mắt xích bề mặt tráng men màu, in chữ hoặc đính đá zircon.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Mắt kèm mặt treo</dt>
              <dd className="text-mute">
                Mắt xích gắn khoen tròn và mặt charm rơi (hoa, sao biển, cây
                thông, tuần lộc) tạo điểm nhấn ở giữa cổ tay.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">Chuẩn 9mm</dt>
              <dd className="text-mute">
                Mắt charm rộng chuẩn 9mm.
              </dd>
            </div>
          </dl>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <GuideFigure
              src="/products/charm-y-vong-tron-mau-6.webp"
              width={399}
              height={399}
              alt="Mẫu vòng tay charm Ý mắt trơn màu bạc"
              caption="Vòng nền mắt trơn"
              sizes="199px"
              maxWidthClass="max-w-[199px]"
            />
            <GuideFigure
              src="/products/charm-y-vong-tron-mau-79.webp"
              width={399}
              height={399}
              alt="Mẫu vòng tay charm Ý phối mắt họa tiết và chữ"
              caption="Vòng phối họa tiết"
              sizes="199px"
              maxWidthClass="max-w-[199px]"
            />
            <GuideFigure
              src="/products/charm-y-mat-hoa-p1-13.webp"
              width={439}
              height={439}
              alt="Mắt charm Ý kèm mặt treo hình hoa"
              caption="Mắt treo hình hoa"
              sizes="219px"
              maxWidthClass="max-w-[219px]"
            />
            <GuideFigure
              src="/products/charm-y-mat-sao-p1-67.webp"
              width={439}
              height={439}
              alt="Mắt charm Ý kèm mặt treo sao biển"
              caption="Mắt treo sao biển"
              sizes="219px"
              maxWidthClass="max-w-[219px]"
            />
          </div>
        </section>

        {/* Section 02 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">02</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Gợi ý phối vòng hoàn chỉnh theo chủ đề
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Khi chọn vòng hoàn chỉnh, bạn có thể bắt đầu từ một tông màu hoặc
            một họa tiết chính, sau đó chọn các mắt và mặt treo phù hợp. Gửi ảnh
            mẫu cùng số lượng dự kiến để xác nhận mẫu và nhận báo giá.
          </p>
        </section>

        {/* Section 03 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">03</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Bộ sưu tập charm Ý Giáng Sinh và bảng số định vị
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Nhóm charm tráng men tông đỏ – xanh lá – trắng (cây thông, ông già
            Noel, tuần lộc, người tuyết, tất quà) phù hợp làm bộ sưu tập theo
            mùa lễ hội cuối năm.
          </p>

          <div className="mt-10 grid max-w-[820px] gap-8 sm:grid-cols-2">
            <GuideFigure
              src="/products/charm-y-giang-sinh-bo-suu-tap.jpg"
              width={1300}
              height={1300}
              alt="Bộ sưu tập các mắt charm Ý chủ đề Giáng Sinh rời và vòng ghép"
              caption="Các mẫu mắt charm rời và vòng ghép chủ đề Giáng Sinh."
              sizes="(min-width: 768px) 380px, 90vw"
              priority
            />
            <GuideFigure
              src="/products/charm-y-giang-sinh-bang-mau.jpg"
              width={1250}
              height={1250}
              alt="Bảng 31 mẫu mắt charm Ý chủ đề Giáng Sinh đánh số từ 1 đến 31"
              caption="Bảng đánh số 1–31 giúp bạn gọi đúng vị trí mẫu trong hình này khi hỏi giá."
              sizes="(min-width: 768px) 380px, 90vw"
            />
            <GuideFigure
              src="/products/vong-tay-charm-y-giang-sinh-cay-thong.jpg"
              width={1300}
              height={1300}
              alt="Vòng tay charm Ý Giáng Sinh phối mặt treo cây thông và tất"
              caption="Vòng hoàn chỉnh phối mặt treo cây thông và tất đỏ."
              sizes="(min-width: 768px) 380px, 90vw"
            />
            <GuideFigure
              src="/products/vong-tay-charm-y-giang-sinh-tuan-loc.jpg"
              width={1300}
              height={1300}
              alt="Vòng tay charm Ý Giáng Sinh phối mặt treo tuần lộc"
              caption="Vòng hoàn chỉnh phối mặt treo tuần lộc."
              sizes="(min-width: 768px) 380px, 90vw"
            />
          </div>
        </section>

        {/* Section 04 */}
        <section className="scroll-mt-24">
          <p className="eyebrow text-mute">04</p>
          <h2 className="heading-2 mt-4 max-w-[22ch]">
            Thông số cần xác nhận trước khi đặt sỉ
          </h2>
          <p className="mt-6 max-w-[60ch]">
            Trước khi chốt đơn, hãy xác nhận rõ 4 thông số dưới đây:
          </p>

          <dl className="mt-8 grid max-w-[65ch] grid-cols-1 gap-y-4 border-t border-line pt-6 text-[14px] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-6">
            <div className="contents">
              <dt className="font-medium text-ink">1. Kích thước mắt</dt>
              <dd className="text-mute">
                Đối chiếu chiều rộng và chiều dài mắt charm qua ảnh chụp cạnh
                thước đo của đúng mẫu chọn.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">2. Kiểu kết nối</dt>
              <dd className="text-mute">
                Xác nhận đặt nguyên vòng ghép sẵn hay đặt từng mẫu mắt rời
                (trơn, tráng men, đính đá zircon, mắt treo).
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">3. Chất liệu</dt>
              <dd className="text-mute">
                Xác nhận chất liệu và hoàn thiện bề mặt cụ thể theo báo giá của
                từng lô hàng.
              </dd>
            </div>
            <div className="contents">
              <dt className="font-medium text-ink">4. Số lượng</dt>
              <dd className="text-mute">
                Một đơn có thể gồm nhiều mẫu, nhiều màu. Đặt cọc, thanh toán phần còn lại và phí vận chuyển: xem chi tiết ở <Link href="/hop-tac" className="link-under">trang Hợp tác</Link>.
              </dd>
            </div>
          </dl>

          <div className="mt-10 max-w-[400px]">
            <GuideFigure
              src="/products/charm-y-giang-sinh-cay-thong-thuoc-do.jpg"
              width={1300}
              height={1300}
              alt="Mắt charm Ý Giáng Sinh hình cây thông đặt cạnh thước đo tham khảo"
              caption="Ảnh chụp mặt trước đặt cạnh thước đo chỉ mang tính tham khảo trực quan cho mẫu trong hình; vui lòng xác nhận kích thước và chất liệu khi đặt hàng."
              sizes="(min-width: 768px) 400px, 90vw"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-[14px]">
            <TextLink href="/san-pham#charm">
              Xem dòng Vòng tay charm Ý
            </TextLink>
            <TextLink href="/hop-tac">Xem điều khoản hợp tác</TextLink>
            <TextLink href={otherGuide.href}>
              {otherGuide.shortTitle.vi}
            </TextLink>
          </div>
        </section>

        <div className="flex flex-col items-start gap-8">
          <h2 className="heading-2 max-w-[20ch]">
            Gửi mẫu charm Ý bạn muốn hỏi giá qua Zalo
          </h2>
          <ZaloButton />
        </div>
      </Container>
    </article>
  );
}
