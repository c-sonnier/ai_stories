// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from './application'

import PageNavigationController from './page_navigation_controller'

import ToggableController from './toggable_controller'
application.register('page-navigation', PageNavigationController)
application.register('toggable', ToggableController)
