package com.hari.ecommerce.configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.hari.ecommerce.model.Product;
import com.hari.ecommerce.model.ProductCategory;

@Configuration
public class MyConfig implements RepositoryRestConfigurer {
	
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		HttpMethod[] unSupportedActions = {HttpMethod.PUT, HttpMethod.DELETE};
		config.getExposureConfiguration().forDomainType(Product.class)
		.withItemExposure((metadata, httpMethods) -> httpMethods.disable(unSupportedActions))
		.withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unSupportedActions));
		
		config.getExposureConfiguration().forDomainType(ProductCategory.class)
		.withItemExposure((metadata, httpMethods) -> httpMethods.disable(unSupportedActions))
		.withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unSupportedActions));
	
		exposeIds(config);
	}

	@SuppressWarnings("rawtypes")
	private void exposeIds(RepositoryRestConfiguration config) {
		Set<EntityType<?>> entities  = entityManager.getMetamodel().getEntities();
		List<Class> entityClasses = new ArrayList<>();
		for (EntityType<?> entity : entities) {
			entityClasses.add(entity.getJavaType());
		}
		Class[] domainType = entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainType);
	}

}
