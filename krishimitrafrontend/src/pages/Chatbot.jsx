import Layout from "../layout/layout";

const Chatbot = () => {
    return (
        <Layout showFooter={false}>
            <div>
            <iframe
                src="http://localhost:8501/"  // Replace with your Streamlit app URL
                width="100%"
                height="800px"
                title="Chatbot"
                style={{ border: 'none' }}
            />
        </div>
        </Layout>
    );
};

export default Chatbot;
