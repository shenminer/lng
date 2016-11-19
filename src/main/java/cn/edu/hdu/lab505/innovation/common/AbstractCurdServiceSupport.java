package cn.edu.hdu.lab505.innovation.common;

import java.io.Serializable;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.springframework.transaction.annotation.Transactional;


public abstract class AbstractCurdServiceSupport<T> implements ICurdServiceSupport<T> {

    protected abstract ICurdDaoSupport<T> getCurdDao();

    @Transactional
    public void delete(T entity) {
        getCurdDao().delete(entity);
    }

    @Transactional
    public T deleteById(Serializable id) {
        T entity = get(id);
        getCurdDao().delete(entity);
        return entity;
    }

    public List<T> find(DetachedCriteria expression) {
        return getCurdDao().find(expression);
    }

    public List<T> findAll() {
        return getCurdDao().findAll();
    }

    public Page<T> findPage(DetachedCriteria expression, int start, int limit) {
        return getCurdDao().findPage(expression, start, limit);
    }

    public T get(Serializable id) {
        return getCurdDao().get(id);
    }

    public Long getCount(DetachedCriteria expression) {
        return getCurdDao().getCount(expression);
    }

    @Transactional
    public void insert(T entity) {
        getCurdDao().insert(entity);
    }

    @Transactional
    public void merge(T entity) {
        getCurdDao().merge(entity);
    }

    @Transactional
    public void saveOrUpdate(T entity) {
        getCurdDao().saveOrUpdate(entity);
    }

    @Transactional
    public void update(T entity) {
        getCurdDao().update(entity);
    }

    public Long getCount() {
        return getCurdDao().getCount();
    }

    public Page<T> findPage(int start, int limit) {
        return getCurdDao().findPage(start, limit);
    }

}
