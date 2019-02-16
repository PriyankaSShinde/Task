package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.EmplDao;
import com.model.Employee;
@Service
@Transactional
public class EmployeeserviceImp implements EmployeeService{

	@Autowired
	private EmplDao empdao;
	@Override
	@Transactional
	public void addEmployee(Employee employee) {
		empdao.addEmployee(employee);
		
	}

	@Override
	@Transactional
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return empdao.getAllEmployees();
	}

	@Override
	@Transactional
	public void deleteEmployee(Integer employeeId) {
		empdao.deleteEmployee(employeeId);
		
	}

	@Override
	@Transactional
	public Employee getEmployee(int employeeid) {
		// TODO Auto-generated method stub
		return empdao.getEmployee(employeeid);
	}

	@Override
	@Transactional
	public Employee updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return empdao.updateEmployee(employee);
		
		
	}

	public EmplDao getEmpdao() {
		return empdao;
	}

	public void setEmpdao(EmplDao empdao) {
		this.empdao = empdao;
	}

}
