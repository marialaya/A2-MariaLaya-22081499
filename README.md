# Shared repository

Maria's shared repository: https://github.com/marialaya/A2-MariaLaya-22081499.git



# A2-MariaLaya-22081499

## Description
This project is designed to demonstrate the implementation of user interface changes, database modeling, API development, and front-end interfaces for CRUD operations. It focuses on modifying existing structures, creating new ones, and integrating a complete workflow from backend to frontend, with features like managing contacts, phones, companies, and a new application with customers, items, and orders. The project provides hands-on experience with Sequelize, API commands, and front-end integration, ensuring data persistence and documentation.



## TASK 1 - USER INTERFACE CHANGES (8 MARKS)

### Features Completed:
**Delete to Delete Contact**: Changed the button label in the contact component from "Delete" to "Delete Contact."
**Dynamic Add Button**: Changed the button label in the phone component to dynamically show "Add Contact's Name Phone."
**Drop-down Menu for Categories**: Replaced the placeholder text "Name" with a drop-down menu with four categories.
**Change Name to Phone Type**: Modified the table's `<tr>` element to change the label "Name" to "Phone Type"



## TASK 2 - TASK 6 OVERVIEW

-the brief explanations are inside the images
-below I will show the screenshot of my documents with brief explanation


## TASK 2 - API COMMAND DEMONSTRATIONS


### GetContact API
![GetContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/GetContact_MariaLaya.png)

### PostContact API
![PostContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/PostContact_MariaLaya.png)

### DeleteContact API
![DeleteContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2 DeleteContact_MariaLaya.png)

### PutContact API
![PutContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/PutContact_MariaLaya.png)

### GetPhone API
![GetPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/GetPhone_MariaLaya.png)

### PostPhone API
![PostPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/PostPhone_MariaLaya.png)

### DeletePhone API
![DeletePhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/DeletePhone_MariaLaya.png)

### PutPhone API
![PutPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task2/PutPhone_MariaLaya.png)



## TASK 3 - DATABASE MODELLING WITH SEQUELIZE AND TEST THE API COMMANDS WHEN THE DATABASE MODIFICATION DONE

### Features Completed:
1. **Modify Contacts Table (3 Marks)**:
   - Added attributes: `id`, `name`, and `address`.

2. **Modify Phones Table (3 Marks)**:
   - Added attributes: `id`, `phone_type`, `phone_number`, and `contactId`.

3. **Front-End Adjustments (5 Marks)**:
   - Modified the front-end to align with the updated backend structure.

4. **API Testing (8 Marks)**:
   - Tested all APIs related to modified `contacts` and `phones` tables with the following commands:
     - `GET`
     - `POST`
     - `PUT`
     - `DELETE`

### GetContact API
![GetContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/GetContact_MariaLaya.png)

### PostContact API
![PostContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/PostContact_MariaLaya.png)

### DeleteContact API
![DeleteContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/DeleteContact_MariaLaya.png)

### PutContact API
![PutContact API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/PutContact_MariaLaya.png)

### GetPhone API
![GetPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/GetPhone_MariaLaya.png)

### PostPhone API
![PostPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/PostPhone_MariaLaya.png)

### DeletePhone API
![DeletePhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/DeletePhone_MariaLaya.png)

### PutPhone API
![PutPhone API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task3/PutPhone_MariaLaya.png)



## TASK 4 - EXPANDING THE EXISTING TABLES (E.G. COMPANY) 

### Features Completed:
1. **Table Creation**:
   - Created a new table `companies` with attributes: `company_id`, `company_name`, `company_address`, and `contact_id` (Foreign Key referencing `contacts`).

2. **API Creation**:
   - Developed four APIs for `companies`:
     - Show Companies
     - Add Company
     - Update Company
     - Delete Company

### GetCompany API
![GetCompany API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task4/GetCompany_MariaLaya.png)

### PostCompany API
![PostCompany API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task4/PostCompany_MariaLaya.png)

### DeleteCompany API
![DeleteCompany API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task4/DeleteCompany_MariaLaya.png)

### PutCompany API
![PutCompany API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task4/PutCompany_MariaLaya.png)



## TASK 5 - FRONT END

### Features Completed:
1. **Frontend Interface**:
   - Created an interface to manage the `companies` table, including adding, editing, deleting, and updating records.
   
### Task 5 Frontend View
![Task 5 Frontend](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task5/Task5Frontend.png)



## TASK 6 - BUILDING A NEW APPLICATION

### Features Completed:
1. **Database Structure**:
   - Created three new tables:
     - `items`: Attributes: `item_id`, `item_name`.
     - `customers`: Attributes: `customer_id`, `customer_name`, `customer_email`,`customer_phonenumber`.
     - `orders`: Attributes: `order_id`, `order_date`, `customer_id`, `item_id`.

#### Customer APIs

### CustomerGet API
![CustomerGet API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/CustomerGet(2types)_MariaLaya.png)

### CustomerPost API
![CustomerPost API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/CustomerPost_MariaLaya.png)

### CustomerPut API
![CustomerPut API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/CustomerPut_MariaLaya.png)

### CustomerDelete API
![CustomerDelete API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/CustomerDelete_MariaLaya.png)

---

#### Item APIs

### ItemGet API
![ItemGet API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/ItemGet(2types)_MariaLaya.png)

### ItemPost API
![ItemPost API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/ItemPost_MariaLaya.png)

### ItemPut API
![ItemPut API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/ItemPut_MariaLaya.png)

### ItemDelete API
![ItemDelete API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/ItemDelete_MariaLaya.png)

---

#### Order APIs

### OrderGet API
![OrderGet API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/OrderGet(2types)_MariaLaya.png)

### OrderPost API
![OrderPost API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/OrderPost_MariaLaya.png)

### OrderPut API
![OrderPut API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/OrderPut_MariaLaya.png)

### OrderDelete API
![OrderDelete API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/OrderDelete_MariaLaya.png)

---

#### Relationships APIs

### RelationshipsGet API
![RelationshipsGet API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/RelationshipsGet_MariaLaya.png)

### RelationshipsGet (2nd Type) API
![RelationshipsGet (2nd Type) API](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/RelationshipsGet(2)_MariaLaya.png)

---

#### Frontend Demonstrations

### FrontEnd (1)
![FrontEnd (1)](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/FrontEnd(1).png)

### FrontEnd (2)
![FrontEnd (2)](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/FrontEnd(2).png)

### FrontEnd (3)
![FrontEnd (3)](https://github.com/marialaya/A2-MariaLaya-22081499/blob/main/Task6/FrontEnd(3).png)





