function AdminDashboard({ isDarkMode, onBack }) {
  try {
    const [messages, setMessages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedMessage, setSelectedMessage] = React.useState(null);

    React.useEffect(() => {
      loadMessages();
    }, []);

    const loadMessages = () => {
      try {
        setLoading(true);
        const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        setMessages(storedMessages);
      } catch (error) {
        console.error('Error loading messages:', error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    const markAsRead = (messageId) => {
      try {
        const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        const updatedMessages = storedMessages.map(msg => 
          msg.id === messageId ? { ...msg, status: 'read' } : msg
        );
        localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
        setMessages(updatedMessages);
      } catch (error) {
        console.error('Error updating message:', error);
      }
    };

    const deleteMessage = (messageId) => {
      if (confirm('Yakin ingin menghapus pesan ini?')) {
        try {
          const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
          const filteredMessages = storedMessages.filter(msg => msg.id !== messageId);
          localStorage.setItem('contactMessages', JSON.stringify(filteredMessages));
          setMessages(filteredMessages);
          setSelectedMessage(null);
        } catch (error) {
          console.error('Error deleting message:', error);
        }
      }
    };

    return (
      <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Admin Dashboard
            </h1>
            <button
              onClick={onBack}
              className="btn-gold flex items-center"
            >
              <div className="icon-arrow-left mr-2"></div>
              Kembali
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Pesan Masuk ({messages.length})
                </h2>
                
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-yellow-400 border-t-transparent mx-auto"></div>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        onClick={() => setSelectedMessage(message)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                          selectedMessage?.id === message.id
                            ? 'bg-yellow-400/20 border border-yellow-400'
                            : isDarkMode 
                              ? 'bg-gray-700 hover:bg-gray-600' 
                              : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {message.name}
                          </h3>
                          {message.status === 'unread' && (
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          )}
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {message.subject}
                        </p>
                        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {new Date(message.createdAt).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              {selectedMessage ? (
                <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Detail Pesan
                    </h2>
                    <div className="flex space-x-2">
                      {selectedMessage.status === 'unread' && (
                        <button
                          onClick={() => markAsRead(selectedMessage.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                        >
                          Tandai Dibaca
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Nama
                      </label>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedMessage.name}
                      </p>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email
                      </label>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedMessage.email}
                      </p>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Saran
                      </label>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedMessage.subject}
                      </p>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Pesan
                      </label>
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className={`whitespace-pre-wrap ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Tanggal Diterima
                      </label>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {new Date(selectedMessage.createdAt).toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`rounded-lg p-12 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <div className="icon-mail text-6xl text-gray-400 mb-4"></div>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Pilih pesan untuk melihat detail
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminDashboard component error:', error);
    return null;
  }
}