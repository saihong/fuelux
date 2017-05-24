/* global QUnit:false, module:false, test:false, asyncTest:false, expect:false */
/* global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false */
/* global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false */
define(function treeTest (require) {
	var QUnit = require('qunit');
	var $ = require('jquery');

	require('bootstrap');
	require('fuelux/tree');

	QUnit.module('Fuel UX Tree', {
		beforeEach: require('./tree-tests/helpers').setup
	}, function () {
		QUnit.test('should be defined on jquery object', function isTreeDefined (assert) {
			assert.ok($().tree, 'tree method is defined');
		});

		QUnit.test('should return element', function doesTreeReturnTree (assert) {
			assert.ok(this.$tree.tree() === this.$tree, 'tree should be initialized');
		});

		QUnit.test('should have correct defaults', require('./tree-tests/defaults'));
		QUnit.test('should call dataSource correctly', require('./tree-tests/calls-datasource'));
		QUnit.test('should be populated by items on initialization', require('./tree-tests/is-populated'));
		QUnit.test('folder should populate when opened', require('./tree-tests/does-folder-populate'));
		QUnit.test('getValue alias should function', require('./tree-tests/get-value-alias'));
		QUnit.test('single item/folder selection works as designed', require('./tree-tests/single-select'));
		QUnit.test('multiple item/folder selection works as designed', require('./tree-tests/multi-select'));
		QUnit.test('should not allow selecting items if disabled', require('./tree-tests/disable-select-items'));
		QUnit.test('should not allow selecting folders if disabled', require('./tree-tests/disable-select-folders'));
		QUnit.test('folders should open and close correctly', require('./tree-tests/folders-open-close'));
		QUnit.test('should disclose visible folders', require('./tree-tests/disclose-visible'));
		QUnit.test('should disclose all folders up to limit, and then close them, then open them all', require('./tree-tests/disclose-all'));
		QUnit.test('should refresh an already opened/cached folder with new nodes', require('./tree-tests/refresh'));
		QUnit.test('should accept TEXT as the NAME property in the datasource', require('./tree-tests/tree-accepts-name'));
		// QUnit.test('should have proper tabindexes', require('./tree-tests/tab-indexes'));
		QUnit.module( 'keyboard input', {}, require('./tree-tests/responds-to-keyboard-input'));

		QUnit.test('should destroy control', require('./tree-tests/is-destroyed'));
	});
});
