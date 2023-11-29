package helloworld;

import org.teavm.jso.dom.html.HTMLDocument;
import jp.tessellation.erhard.system1D.Customer;

public class Client {
    public static void main(String[] args) {
        var document = HTMLDocument.current();
	int type = Integer.parseInt(document.getElementById("h_type").getTextContent());
	int level = Integer.parseInt(document.getElementById("h_level").getTextContent());
        Customer customer = new Customer(level, type);
	String str = "[]";
        if (customer.dtosString.length()>0) {
		str = "["+customer.dtosString+"0]";
	}
        document.getElementById("h_textformat").setTextContent(str);
     
    }
}
