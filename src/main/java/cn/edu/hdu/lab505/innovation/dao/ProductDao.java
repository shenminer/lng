package cn.edu.hdu.lab505.innovation.dao;

import cn.edu.hdu.lab505.innovation.common.AbstractHibernateCurdDaoSupport;
import cn.edu.hdu.lab505.innovation.domain.domain.Product;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by hhx on 2016/11/19.
 */
@Repository
public class ProductDao extends AbstractHibernateCurdDaoSupport<Product> implements IProductDao {
    public List<Product> findByAccountId(int id) {
        DetachedCriteria detachedCriteria = DetachedCriteria.forClass(Product.class);
        detachedCriteria.createAlias("a", "account");
        detachedCriteria.add(Restrictions.eq("a.id", id));
        return (List<Product>) getHibernateTemplate().findByCriteria(detachedCriteria);
    }
}
