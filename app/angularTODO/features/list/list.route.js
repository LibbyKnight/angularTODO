angular
	.module('angularTODO.list')
	.config(listConfig);

function listConfig($stateProvider) {

	$stateProvider.state({
		name: 'list',
		url: '/',
		templateUrl: '/angularTODO/features/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}