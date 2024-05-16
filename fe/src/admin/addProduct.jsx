%@page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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

<meta charset="utf-8">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
								<h2>Thêm Sản Phẩm</h2>
								<form class="form-horizontal"

									action="<c:url value="/AddProServlet"></c:url>"
									method="post" enctype="multipart/form-data">
									<div class="form-group">
										<label class="control-label col-sm-2" >Mã sản phẩm:</label>
										<div class="col-sm-10">
											<input  class="form-control" name="id" placeholder="Nhập mã sản phẩm">
										</div>
										<label class="control-label col-sm-4" style="color: red"
											   for="email">${erorr.duplicateMa}${erorr.NoID}</label>

									</div>
									<div class="form-group">
										<label class="control-label col-sm-2" >Tên
											sản phẩm*:</label>
										<div class="col-sm-10">
											<input type="text" class="form-control"
												   name="name" placeholder="Nhập tên tài khoản">
										</div>
										<label class="control-label col-sm-4" style="color: red"
											   for="email">${erorr.NoName}</label>

									</div>
									<div class="form-group">
										<label class="control-label col-sm-2" for="pwd">Giá
											gốc:</label>
										<div class="col-sm-10">
											<input type="text" class="form-control"
												   name="price" placeholder="Nhập giá">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-2" for="pwd">Ảnh
											sản phẩm:</label>
										<div class="col-sm-10">
											<input type="text" class="form-control"
												   name="img" placeholder="Nhập tên ảnh">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-sm-2" for="pwd">Mô tả:</label>
										<div class="col-sm-10">
											<input type="text" class="form-control" id="pwd"
												   name="description" placeholder="Nhập mô tả">
										</div>
									</div>
									<div class="form-group">
										<label>Danh mục</label> <select name="cate"
																		class="form-select" aria-label="Default select example">
										<c:forEach items="${listCat}" var="c">
											<option value="${c.cID}">${c.cName}</option>
										</c:forEach>
									</select>
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

</body>

</html>