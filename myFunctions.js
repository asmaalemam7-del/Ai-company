function toggleDetails(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "table-row";
  } else {
    element.style.display = "none";
  }
}
function validateForm() {
  var appName = document.getElementById("appName").value.trim();
  var companyName = document.getElementById("companyName").value.trim();
  var website = document.getElementById("website").value.trim();
  var isFree = document.getElementById("isFree").value;
  var usageField = document.getElementById("usageField").value;
  var description = document.getElementById("description").value.trim();

  var nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(appName)) {
    alert("اسم التطبيق يجب أن يحتوي على أحرف إنكليزية فقط بدون فراغات.");
    return false;
  }

  if (!nameRegex.test(companyName)) {
    alert("اسم الشركة يجب أن يحتوي على أحرف إنكليزية فقط.");
    return false;
  }

  if (website === "") {
    alert("يرجى إدخال رابط الموقع.");
    return false;
  }

  if (isFree === "") {
    alert("يرجى اختيار إذا كان التطبيق مجاني أم لا.");
    return false;
  }

  if (usageField === "") {
    alert("يرجى اختيار مجال الاستخدام.");
    return false;
  }

  if (description === "") {
    alert("يرجى كتابة شرح مختصر.");
    return false;
  }

  // إذا كل شيء صحيح، الانتقال إلى صفحة التطبيقات
  window.location.href = "apps.html";
  return false;
}