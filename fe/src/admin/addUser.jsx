<%@page isELIgnored="false"%>
<%@ page import="java.io.*,java.util.*, javax.servlet.*" %>
<%@ page import="javax.servlet.http.*" %>
<%
	// Check if the user has the admin role
	Boolean isAdmin = (Boolean)session.getAttribute("isAdmin");
	if (isAdmin == null || !isAdmin) {
		// Redirect to an error page or the login page
		response.sendRedirect("404.jsp"); // Change this to the actual error page or login page
	}
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<meta charset="utf-8">
	<%@ page language="java" contentType="text/html; charset=UTF-8"
			 pageEncoding="UTF-8"%>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport"
		  content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<link href="../admin/css/sb-admin-2.min.css" rel="stylesheet">

	<title>DHStore Admin - Dashboard</title>

	<!-- Custom fonts for this template-->


</head>

<body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">

	<!-- Sidebar -->
	<jsp:include page="../header/headerLeftAmin.jsp"></jsp:include>
	<!-- End of Sidebar -->

	<!-- Content Wrapper -->
	<div id="content-wrapper" class="d-flex flex-column">
		<jsp:include page="../header/headerTopAmin.jsp"></jsp:include>
		<!-- Main Content -->
		<div id="content">
			<!-- Begin Page Content -->
			<div class="container-fluid">
				<div class="container " style="margin-top: var(- -header-height)">
					<!-- Topbar -->

					<!-- End of Topbar -->
					<div class="row">
						<div class="col-md-12">
							<h2>Thêm tài khoản</h2>
							<form class="form-horizontal" action="<c:url value="/AddUser"></c:url>" method="get">
								<div class="form-group">
									<label class="control-label col-sm-2" for="email">Tên tài khoản*:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" name="userName"
											   placeholder="Nhập tên tài khoản">
									</div>
									<label class="control-label col-sm-4" style="color: red" for="email">${erorr.duplicateUserName}${erorr.NoUserName}</label>

								</div>
								<div class="form-group">
									<label class="control-label col-sm-2" for="pwd">Mật khẩu*:</label>
									<div class="col-sm-10">
										<input type="password" class="form-control" name="upassword"
											   placeholder="Nhập mật khẩu">
									</div>
									<label class="control-label col-sm-4" style="color: red" for="email">${erorr.NoPas}</label>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-3" for="pwd">Nhập lại mật khẩu*:</label>
									<div class="col-sm-10">
										<input type="password" class="form-control" name="repass"
											   placeholder="Nhập lại mật khẩu">
									</div>
									<label class="control-label col-sm-4"  style="color: red"  for="email">${erorr.erorrRepass}</label>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-3" for="pwd">Họ và tên khách hàng:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" name="fullName"
											   placeholder="Nhập họ và tên">
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-2" for="pwd">Số điện thoại:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" name="phone"
											   placeholder="Nhập số điện thoại">
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-2" for="pwd">Email:</label>
									<div class="col-sm-10">
										<input type="email" class="form-control" name="email"
											   placeholder="Nhập email">
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-2" for="pwd">Địa chỉ:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" name="address"
											   placeholder="Nhập địa chỉ">
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-sm-2" for="pwd">Quyền:</label>
									<div class="col-sm-10">
										<input type="text" class="form-control" id="pwd" name="rights"
											   placeholder="Nhập quyền">
									</div>
								</div>
								<div class="form-check my-2">
									<div class="form-check-left">
										<input class="form-check-input key-checkbox" type="checkbox" id="alreadyHaveAccount" name="alreadyHaveAccount">
										<label class="form-check-label" for="alreadyHaveAccount">
											Đã có khóa
										</label>
									</div>
									<div class="form-check-right">
										<input class="form-check-input key-checkbox" type="checkbox" id="noKey" name="noKey">
										<label class="form-check-label" for="noKey">
											Chưa có khóa
										</label>
									</div>
								</div>
								<div id="keyFields" style="display: none;">
									<label><b>Public Key*</b></label>
									<input id="publicKey" name="publicKey" type="text" placeholder="Public Key" class="border p-3 w-100 my-2">
									<label><b>Private Key*</b></label>
									<input id="privateKey" name="privateKey" type="text" placeholder="Private Key" class="border p-3 w-100 my-2">
								</div>

								<div id="otherKeyFields" style="display: none;">
									<label><b>Public Key*</b></label>
									<input name="publicKey" type="text" placeholder="Public Key" class="border p-3 w-100 my-2">
									<label><b>Private Key*</b></label>
									<input name="privateKey" type="text" placeholder="Private Key" class="border p-3 w-100 my-2">
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="submit" class="btn btn-default btn-primary">Thêm</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /.container-fluid -->

		</div>
	</div>
	<!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top"> <i
		class="fas fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog"
	 aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
				<button class="close" type="button" data-dismiss="modal"
						aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">Select "Logout" below if you are ready
				to end your current session.</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" type="button"
						data-dismiss="modal">Cancel</button>
				<a class="btn btn-primary" href="login.html">Logout</a>
			</div>
		</div>
	</div>
</div>

<!-- Bootstrap core JavaScript-->
<script src="../admin/vendor/jquery/jquery.min.js"></script>
<script src="../admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="../admin/vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="../admin/js/sb-admin-2.min.js"></script>

<script>
	function toggleKeyFields(checkbox) {
		var keyCheckboxes = document.querySelectorAll('.key-checkbox');
		var keyFields = document.getElementById('keyFields');
		var otherKeyFields = document.getElementById('otherKeyFields');
		var publicKeyInput = document.getElementById('publicKey');
		var privateKeyInput = document.getElementById('privateKey');

		keyCheckboxes.forEach(function (otherCheckbox) {
			if (otherCheckbox !== checkbox && otherCheckbox.checked) {
				otherCheckbox.checked = false;
			}
		});

		// Check if at least one of the key checkboxes is checked
		var isChecked = Array.from(keyCheckboxes).some(checkbox => checkbox.checked);

		keyFields.style.display = isChecked ? 'block' : 'none';
		otherKeyFields.style.display = isChecked ? 'none' : 'block';

		if (isChecked) {
			// Chưa có khóa được chọn, random khóa và điền vào input
			publicKeyInput.value = '';
			privateKeyInput.value = '';

			if (checkbox.id === 'noKey' && checkbox.checked) {
				// Random khóa khi chọn "Chưa có khóa"
				generateRandomKey();
			}
		}
	}

	function generateRandomKey() {
		// Gọi servlet để lấy khóa ngẫu nhiên từ máy chủ
		// Sử dụng fetch API để thực hiện điều này
		fetch('/RandomKeyServlet')
				.then(response => response.json())
				.then(data => {
					// Điền khóa vào ô input
					document.getElementById('publicKey').value = data.publicKey;
					document.getElementById('privateKey').value = data.privateKey;
				})
				.catch(error => console.error('Error:', error));
	}

	document.querySelectorAll('.key-checkbox').forEach(function (checkbox) {
		checkbox.addEventListener('change', function () {
			toggleKeyFields(checkbox);
		});
	});
</script>

</body>

</html>