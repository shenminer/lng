package cn.edu.hdu.lab505.innovation.dao;

import cn.edu.hdu.lab505.innovation.domain.data.Data;
import cn.edu.hdu.lab505.innovation.domain.data.Document;
import cn.edu.hdu.lab505.innovation.domain.data.Sensor;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.UpdateOperations;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by hhx on 2016/11/19.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class DocumentDaoTest {
    @Resource
    private IDocumentDao documentDao;
    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    @Transactional
    @Rollback(false)
    public void testAdd() {

       Document d = documentDao.findLatestByProductId(1);
       // Sensor s1=d.getS1();
      //  s1.add(new Data(11,33f));
        Datastore datastore=documentDao.getDatastore();
        UpdateOperations ops = datastore.createUpdateOperations(Document.class).add("S1.dataList",new Data(12,4f));
        datastore.update(d,ops);
        System.out.println("==========" );
    }
}
