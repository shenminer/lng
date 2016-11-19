package cn.edu.hdu.lab505.innovation.controller;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;

public class ServletConfig extends ResourceConfig {
	public ServletConfig(String scanPackage){
		register(RequestContextFilter.class);
	    packages(scanPackage);
	    register(ExceptionMapperSupport.class);
	    register(JacksonFeature.class);
	    register(LoggingFilter.class);
	}
}
