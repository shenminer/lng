package cn.edu.hdu.lab505.innovation.dao;

import cn.edu.hdu.lab505.innovation.domain.data.Document;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by hhx on 2016/11/19.
 */
@Repository
public class DocumentDao extends BasicDAO<Document, ObjectId> implements IDocumentDao {
    @Autowired
    protected DocumentDao(Datastore ds) {
        super(ds);
    }

    public Document findLatestByProductId(int productId) {
        ensureIndexes();
        Query<Document> query = getDatastore().createQuery(getEntityClass());
        query.limit(1);
        query.order("-start");
        query.and(query.criteria("productId").equal(productId));
        List<Document> list = find(query).asList();
        if (list.isEmpty()) {
            return null;
        } else {
            return list.get(0);
        }
    }

    public List<Document> findByProductIdLimit(int productId, long start, long limit) {
        ensureIndexes();
        Query<Document> query = getDatastore().createQuery(getEntityClass());
        query.and(query.criteria("productId").equal(productId));
        query.filter("start <=", limit);
        query.filter("start >=", start);
        return find(query).asList();
    }
}
