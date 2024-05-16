<%@page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>DHStore Admin  - Dashboard</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<style>
	button.btn.btn-primary.a {
        margin-top: -61px;
        margin-left: 902px;
    }
	</style>
</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <jsp:include page="../header/headerLeftAmin.jsp"></jsp:include>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
              <jsp:include page="../header/headerTopAmin.jsp"></jsp:include>
                <!-- Begin Page Content -->
                <div class="container-fluid">
					<div class="container " style="margin-top: var(--header-height)">
	   			<!-- Topbar -->

                <!-- End of Topbar -->
		<div class="row">
			<div class="col-md-12">

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Danh sách đơn hàng</h3>

                        <button onclick="reloadPage()" class="btn btn-primary a">Kiểm tra đơn hàng</button>

					</div>

					</div>

					<table class="table table-hover" id="dev-table">
						<thead>
						<tr>

							<th>STT</th>
                            <th>Người đặt</th>
							<th>Người nhận</th>
							<th>Ngày Đặt</th>
							<th>Địa chỉ</th>
							<th>Tổng tiền</th>
							<th>Thanh toán</th>
							<th>Trạng thái</th>
							<th>Kiểm duyệt</th>
							<th>Xem</th>

						</tr>
						</thead>
						<c:set var="count" value="0"></c:set>
						<c:forEach items="${dsDonHang}" var="dh">
							<tr>
								<c:set var="count" value="${count + 1 }"></c:set>
								<td>${count}</td>
                                <td>${dh.nameAcc}</td>
								<td>${dh.nameRecipient}</td>
								<td>${dh.dateOrder}</td>
								<td>${dh.address}</td>
								<td>${dh.totalMoney}00 đ</td>
								<c:set var="thanhToan" value="${dh.checkout}"></c:set>
								<c:if test="${thanhToan == '0'}">
									<td>Chưa thanh toán</td>
								</c:if>
								<c:if test="${thanhToan == '1'}">
									<td>Đã thanh toán</td>
								</c:if>

								<c:set var="trangThai" value="${dh.status}"></c:set>
								<c:if test="${dh.status == '0'}">
									<td>Chưa duyệt</td>
									<td>
										<a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Duyet"></c:url>"><button class="btn btn-primary">Duyệt</button></a> </t><br>
										<a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xoa"></c:url>"><button class="btn" style="background-color: red; color: white; padding: 6px 18px;margin-top: 5px;">Hủy</button></a>
									</td>
									<td><a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xem"></c:url>"><button class="btn btn-warning">Xem</button></a></td>
								</c:if>

								<c:if test="${dh.status == '-1'}">
                                									<td>Bị chỉnh sửa</td>
                                									<td>


                                										<a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xoa"></c:url>"><button class="btn" style="background-color: red; color: white; padding: 6px 18px;">Hủy</button></a>
                                									</td>
                                									<td><a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xem"></c:url>"><button class="btn btn-warning">Xem</button></a></td>
                                </c:if>
								<c:if test="${dh.status == '1'}">
									<td>Đã duyệt</td>
									<td>
										<a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xoa"></c:url>"><button class="btn" style="background-color: red; color: white; padding: 6px 18px;">Hủy</button></a>
									</td>
									<td><a href="<c:url value="/admin/DuyetXoaXemDonHang?id=${dh.idOrder}&chucNang=Xem"></c:url>"><button class="btn btn-warning">Xem</button></a></td>
								</c:if>
								<c:if test="${dh.status == '2'}">
                                	<td>Đã hủy</td>
								</c:if>
								<c:if test="${dh.status == '3'}">
                                    <td>Đã hủy và hoàn tiền</td>
                                </c:if>
								<c:if test="${dh.status == '-2'}">
									<td>Không được xác nhận</td>
								</c:if>

							</tr>
						</c:forEach>
						</tbody></table>

				</div>
			</div>
		</div>

	</div>
                </div>

            </div>

        </div>

    </div>

    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="Login.jsp">Logout</a>
                </div>
            </div>
        </div>
    </div>
	// datatable
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.11.3/datatables.min.css"/>
	<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.11.3/datatables.min.js"></script>
	<script>
		$(document).ready(function() {
			$('#dev-table').DataTable();
		});
		const reloadPage = ()=>{
		    location.reload();
		}
	</script>
    <!-- Bootstrap core JavaScript-->

    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>

</body>

</html>