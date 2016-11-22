import Mortgage from './mortgage2';
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
([
/* 0 */
/***/ function(module, exports) {

	     'use strict';



	        document.getElementById('calcBtn').addEventListener('click', function () {
						let principal = document.getElementById("principal").value;
	 					let years = document.getElementById("years").value;
	 					let rate = document.getElementById("rate").value;
	 					let mortgage = new Mortgage(principal, years, rate);
	 					document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
	 					document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
	 					let html = "";
	 					mortgage.amortization.forEach((year, index) => html += `
			 			<tr>
					 		<td>${index + 1}</td>
					 		<td class="currency">${Math.round(year.principalY)}</td>
					 		<td class="stretch">
							 	<div class="flex">
									 	<div class="bar principal"
													style="flex:${year.principalY};-webkit-flex:${year.principalY}">
									 	</div>
									 	<div class="bar interest"
												style="flex:${year.interestY};-webkit-flex:${year.interestY}">
									 	</div>
							  </div>
					 		</td>
							<td class="currency left">${Math.round(year.interestY)}</td>
					 		<td class="currency">${Math.round(year.balance)}</td>
			 			</tr>
	 					`);
	 					document.getElementById("amortization").innerHTML = html;;
	        });

/***/ }
]);
