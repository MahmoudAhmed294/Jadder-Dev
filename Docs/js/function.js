let nav = `
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
<a href="index.html" class="c_logo navbar-brand">
  <img src="../img/logo/logoar.webp" alt="" class="s-img" />
</a>
<ul class="navbar-nav ml-auto mt-2 mt-lg-0 l-nav ">
  <li class="nav-item  line-Hover">
    <a href="index.html">الرئيسية</a>
  </li>
  <li class="nav-item  line-Hover">
    <a href="about.html">عن جدير</a>
          </li>
  <li class="nav-item  ">
    <div class="dropdown">
      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          الفرص
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="course.html"  >اللغات والترجمة</a>

          <a class="dropdown-item" href="#"  >الترفيه والرياضة
          </a>

          <a class="dropdown-item" href="#"  >التصميم والفن</a>

          <a class="dropdown-item" href="#"  >السياحة والفندقة</a>

          <a class="dropdown-item" href="#"  >اللغات والترجمة</a>

          <a class="dropdown-item" href="#"  >الأمن والسلامة</a>

          <a class="dropdown-item" href="#"  >
              الثقافة والاعلام والصحافة</a>

          <a class="dropdown-item" href="#"  >الصناعة والإنتاج</a>

          <a class="dropdown-item" href="#"  >التعليم والتدريب</a>

          <a class="dropdown-item" href="#"  >القانون والقضاء</a>

          <a class="dropdown-item" href="#"  >تقنية المعلومات والاتصالات</a>

          <a class="dropdown-item" href="#"  >المال والاعمال</a>

          <a class="dropdown-item" href="#"  >الإدارة والمشاريع</a>

          <a class="dropdown-item" href="#"  >الصحة والغذاء</a>
          
          <a class="dropdown-item" href="#"  >الهندسة والعلوم والطاقة</a>

          <a class="dropdown-item" href="#"  >العلوم الشرعية والاجتماعية والإنسانية</a>

          <a class="dropdown-item" href="#"  >تطوير ذات</a>
      </div>
  </div>


  </li>
  <li class="nav-item  ">
    <div class="dropdown">
      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink3" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          المزيد
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="ask.html"  >الأسئلة الشائعة</a>
      </div>
  </div>
</li>
<li class="line-Hover"><a href="#contectAS">تواصل معنا</a></li>
<li>
  <div class="dropdown">
      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          تسجيل الدخول
          </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="login.html">تسجيل الدخول</a>
          <a class="dropdown-item" href="register.html">تسجيل حساب جديد</a>
          <a class="dropdown-item" href="register.html">تسجيل صناع التدريب</a>
      </div>
  </div>
</li>
</ul>


<div class="Con_i_media">
  <a href="#" class="i_media"><i class="flaticon-youtube"></i></a>
  <a href="#" class="i_media"><i class="flaticon-twitter"></i></a>
  <a href="#" class="i_media"><i class="flaticon-instagram"></i></a>
  </div>

</div>

`;
let loader = `    <div class="spinner centered">
      <div class="spinner-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
    </div>
`;

let contectAs = `    <div class="T-content">
      <h3 class="T-sec2">تواصل معنا</h3>
      <div class="L-sec-2-T"></div>
    </div>

    <div class="SocialMedia">
      <a href="#" class="sec7-Twitter"><i class="flaticon-twitter"></i></a>
      <a href="#" class="sec7-instagram"><i class="flaticon-instagram"></i></a>
      <a href="#" class="sec7-youtube"><i class="flaticon-youtube"></i></a>
      <a href="#" class="sec7-whatsapp"><i class="flaticon-whatsapp-logo-variant"></i></a>
    </div>
    <form method="post" class="input-con">
      <div class="input-group col-xl-6 col-sm-12">
        <input type="text" class="inp-ContentAs" placeholder="أدخل اسمك" />
      </div>
      <div class="input-group col-xl-6 col-sm-12">
        <input type="email" class="inp-ContentAs" placeholder="أدخل البريد الالكترونى" />
      </div>
      <div class="input-group col-12">
        <input type="text" class="inp-ContentAs" placeholder="أدخل عنوان الرساله" />
      </div>

      <div class="input-group col-12">
        <textarea class="inp-ContentAs" cols="10" rows="5" placeholder="أدخل نص الرساله"
          style="resize: none;"></textarea>
      </div>
      <button class="btn btn-send">إرسال الرسالة</button>
    </form>
`;
let map = `    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232414.21657650452!2d39.75151706598921!3d24.46909298465426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfaa728d4c15%3A0x39c9cca9e8b98e2f!2z2KfZhNmF2LPYrNivINin2YTZhtio2YjZig!5e0!3m2!1sar!2seg!4v1594646719101!5m2!1sar!2seg"
      width="100%" height="450" frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false"
      tabindex="0"></iframe>
`;
let footer = `    <div class="Footer-container">
      <div class="col-xl-4 col-md-12 col-sm-12">
        <div class="T-footer">
          <h4>عن جدير</h4>
          <div class="L-sec-2-T line-footer"></div>
        </div>
        <span class="">
          <p class="text-white text-justify" dir="rtl">
            مبادرة رائدة في عرض الفرص التدريبية والتأهيلية للشباب بما يتناسب
            مع سوق العمل ويدعم الباحثين عن عمل أو الطموحين الساعين لتحسين
            مراكزهم الوظيفية كما تهدف منصة جدير الى تعزيز الوعي المهني ودعم
            الارشاد المهني وتمكين الجديرين من تقييم مهاراتهم و وضع الخطط التي
            تمكنهم من رفع مستواهم المهاري وخبراتهم العملية والعلمية (المساهمة
            في تشكيل جيل جدير بالتنافسية العالمية).
          </p>
        </span>
      </div>
      <div class="col-xl-4 col-md-12 col-sm-12">
        <div class="T-footer">
          <h4>صفحات اضافية</h4>
          <div class="L-sec-2-T line-footer"></div>
        </div>

        <ul class="F_links">
          <li class="mb-2">
            <span class="point-hover"></span><a href="#" class="">سياسة الخصوصية</a>
          </li>
          <li class="mb-2">
            <span class="point-hover"></span><a href="#" class="">كيف نعمل</a>
          </li>
          <li class="mb-2">
            <span class="point-hover"></span><a href="#" class="">أسئله متكررة</a>
          </li>
          <li class="mb-2">
            <span class="point-hover"></span><a href="#" class="">الشروط والاحكام</a>
          </li>
          <li class="mb-2">
            <span class="point-hover"></span><a href="#" class="">سياسة الالغاء و الاسترجاع</a>
          </li>
        </ul>
      </div>
      <div class="col-xl-4 col-md-12 col-sm-12">
        <div class="T-footer">
          <h4>روابط الاتصال</h4>
          <div class="L-sec-2-T line-footer"></div>
        </div>

        <div class="text-right mb-4 d-flex">
          <a href="#" class="i-footer"><i class="flaticon-twitter i-16"></i></a>
          <a href="#" class="i-footer"><i class="flaticon-instagram i-16"></i></a>
          <a href="#" class="i-footer"><i class="flaticon-youtube i-16"></i></a>
          <a href="#" class="i-footer"><i class="flaticon-whatsapp-logo-variant i-16"></i></a>
        </div>

        <div class="text-right">
          <p class="d-inline text-white">01234646125</p>
          <i class="flaticon-phone-call float-right ml-3" style="line-height: 12px;"></i>
        </div>
        <div class="text-right">
          <a href="#" class="d-inline h-Footer-link">info@akoon.me</a>
          <i class="flaticon-email ml-3"></i>
        </div>
      </div>
    </div>
  </footer>
`;
let rights = `    <h6 class="text-center text-muted">
      جميع حقوق النشر محفوظة لدى منصة جدير 2018
    </h6> 
`;
class SetAttr {
  constructor(attr, className) {
    (this.attr = attr), (this.className = className);
  }
  setHtml() {
    $(`${this.className}`).html(this.attr);
  }
}

const nav_set = new SetAttr(nav, ".nav_style");
const loader_set = new SetAttr(loader, "#loader");
const contectAs_set = new SetAttr(contectAs, "#contectAS");
const map_set = new SetAttr(map, "#map");
const footer_set = new SetAttr(footer, "#footer");
const rights_set = new SetAttr(rights, "#rights");

nav_set.setHtml();
loader_set.setHtml();
contectAs_set.setHtml();
map_set.setHtml();
footer_set.setHtml();
rights_set.setHtml();