/***
 * ===========================================================================================
 * 
 * Observer Pattern
 * 
 * source: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
 * 
 * Observer design pattern is a design pattern in which an object ( called as Subject) maintains
 * a list of objects(Observers) who are notified of any changes in the Subject.
 *  
 * Observers will have the ability of of subscribing and unsubscribing to the notification. 
 * 
 * ****** Important definitions. ****
 * 
 * Subject: 
 *      maintains a list of observers, facilitates adding or removing observers
 * 
 * Observer: 
 *      provides an update interface for objects that need to be notified of a Subject's changes of state
 * 
 * ConcreteSubject:
 *      broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
 * 
 * ConcreteObserver: 
 *      stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's
 * ===========================================================================================
 */

 //First lets model ObserverList

 

 function Subject()