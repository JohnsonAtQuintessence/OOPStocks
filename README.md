# Trading Platform
This is a simple TypeScript project that demonstrates several Object-Oriented Programming (OOP) concepts, including Encapsulation, Inheritance, Abstraction, and Polymorphism.

## Encapsulation
Encapsulation is the process of hiding the internal details of an object and exposing only the relevant data and behavior through public methods. In this project, the Security class encapsulates the data related to a security, such as its symbol, name, and sector. It provides public methods to access this data, such as getSymbol(), getName(), and getSector(). By encapsulating the data, we can ensure that it is accessed and modified only through controlled channels, which helps to maintain the integrity of the object.

## Inheritance
Inheritance is the process of creating new classes from existing classes, which inherit the properties and behavior of the parent class. In this project, the Stock class inherits from the Security class, which means that it has access to all the properties and methods of the Security class. This allows us to create a more specific type of security, such as a stock, while reusing the common properties and behavior defined in the Security class.

## Abstraction
Abstraction is the process of hiding the implementation details of an object and exposing only the relevant data and behavior through interfaces or abstract classes. In this project, we use the ISecurity interface to abstract the TradingPlatform class from any specific security type. The ISecurity interface defines the common methods that all securities must implement, such as getSymbol(), getName(), and getSector(). By using the interface, we can ensure that the TradingPlatform class works with any security type that implements the interface, without having to know the specific implementation details of each security type.

## Polymorphism
Polymorphism is the ability of objects of different types to be used interchangeably, as long as they implement a common interface or abstract class. In this project, we use the Trade class to create BuyTrade and SellTrade objects, which have different implementations of the getTotal() method. However, they both inherit from the Trade class and implement the same interface, which allows us to use them interchangeably in the TradingPlatform class.

## Conclusion
This project demonstrates several OOP concepts and how they can be used to create more maintainable and extensible software. By encapsulating data, using inheritance to reuse code, abstracting implementation details, and enabling polymorphism, we can create software that is easier to understand, modify, and extend.

## Usage
To run the project, open a terminal window, navigate to the project folder, and enter the following command:
```
npm install
npm start
```