package com.dao;

import java.util.List;

import com.model.Employee;

public interface EmplDao {
	public void addEmployee(Employee employee);
	 
    public List<Employee> getAllEmployees();
    
    public Employee getEmployee(int employeeid);
 
    public void deleteEmployee(Integer employeeId);
 
    public Employee updateEmployee(Employee employee);
 
    
}
