package cn.edu.hdu.lab505.innovation.service;

import cn.edu.hdu.lab505.innovation.common.AbstractCurdServiceSupport;
import cn.edu.hdu.lab505.innovation.common.ICurdDaoSupport;
import cn.edu.hdu.lab505.innovation.dao.IAccountDao;
import cn.edu.hdu.lab505.innovation.dao.IProductDao;
import cn.edu.hdu.lab505.innovation.domain.domain.Account;
import cn.edu.hdu.lab505.innovation.domain.domain.Product;
import cn.edu.hdu.lab505.innovation.domain.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by hhx on 2016/11/19.
 */

@Service
public class ProductService extends AbstractCurdServiceSupport<Product> implements IProductService {
    @Autowired
    private IProductDao productDao;
    @Autowired
    private IAccountDao accountDao;

    @Override
    @Transactional
    public void insert(Product entity) {
        try {
            super.insert(entity);
        } catch (DataIntegrityViolationException e) {
            throw new DuplicateKeyException(entity.getImei() + " duplicate");
        }

    }

    protected ICurdDaoSupport<Product> getCurdDao() {
        return productDao;
    }

    @Transactional
    public void updateIgnoreImei(Product product) {
        Product origin = get(product.getId());
        origin.setAddress(product.getAddress());
        origin.setLatitude(product.getLatitude());
        origin.setLongitude(product.getLongitude());
        origin.setName(product.getName());
        origin.setRegion(product.getRegion());
        origin.setSpecification(product.getSpecification());
        origin.setType(product.getType());
        update(origin);
    }

    @Transactional
    public List<Product> findByAccountId(int id) {
        Account account = accountDao.get(id);
        List<Role> roles = account.getRoleList();
        boolean isAdmin = false;
        for (Role r : roles
                ) {
            if (r.getName().equals("admin")) {
                isAdmin = true;
            }
        }
        if (isAdmin) {
            return productDao.findAll();
        } else {
            return productDao.findByAccountId(id);
        }
    }
}
